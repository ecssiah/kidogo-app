import React, { useState } from 'react';
import {
  Image, StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView
} from 'react-native';
import { Audio } from 'expo-av'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '../constants/Style';
import { Icon } from 'react-native-elements'
import styles from '../components/styles'

import {
  SignUpCaregiver, SignInCaregiver, ConfirmCaregiver
} from '../utilities/auth'
import { createCaregiver } from '../utilities/store';

import Loading from '../components/Loading'
import Spacer from '../components/Spacer'
import CaregiverEntry from '../components/CaregiverEntry'
import CentreEntry from '../components/CentreEntry'
import ConfirmModal from '../components/ConfirmModal';

const SignUp = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [centreName, setCentreName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [soundObject, setSoundObject] = useState(null)
  const [confirmModalVisible, setConfirmModalVisible] = useState(false)


  const onPressSignUp = async () => {
    setLoading(true)

    const caregiverData = {
      username,
      password,
      email,
      phone,
      centreName,
      address,
      city,
    }

    await SignUpCaregiver(caregiverData)

    setLoading(false)
    setConfirmModalVisible(true)
  }


  const onConfirmAttempt = async (code) => {
    const confirmResult = await ConfirmCaregiver(username, code)

    if (confirmResult === 'SUCCESS') {
      await createCaregiver({
        username,
        password,
        email,
        firstName,
        lastName,
        phone,
        centreName,
        address,
        city,
      })

      await SignInCaregiver(username, password)

      props.navigation.navigate('Dash')

      setConfirmModalVisible(false)
    } else {
      console.log("Caregiver confirmation failed")
    }
  }


  const toggleHelpAudio = async () => {
    try {
      if (soundObject) {
        await soundObject.stopAsync()

        setSoundObject(null)
      } else {
        const soundObject = new Audio.Sound()
        await soundObject.loadAsync(require('../assets/audio/signup.mp3'))
        await soundObject.playAsync()

        setSoundObject(soundObject)
      }
    } catch(error) {
      console.error(error)
    }
  }


  const showError = error => {
    setError(error)
    setTimeout(() => setError(null), 2000)
  }


  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[Colors.gradient_dark, Colors.gradient_light]}
    >
      {loading
        ? <Loading />
        : <ScrollView >
            <Spacer height={40} />

            <CaregiverEntry
              username={username}
              passwordd={password}
              email={email}
              firstName={firstName}
              lastName={lastName}
              phone={phone}
              onChangeUsername={setUsername}
              onChangePassword={setPassword}
              onChangeEmail={setEmail}
              onChangeFirstName={setFirstName}
              onChangeLastName={setLastName}
              onChangePhone={setPhone}
            />

            <CentreEntry
              centreName={centreName}
              address={address}
              city={city}
              onChangeCentreName={setCentreName}
              onChangeAddress={setAddress}
              onChangeCity={setCity}
            />

            <Spacer large />

            <TouchableOpacity
              style={styles.signUpButton}
              onPress={onPressSignUp}
            >
              <Text style={styles.btnText}>Confirm Signup</Text>
            </TouchableOpacity>

            <Spacer height={322} />
          </ScrollView>
      }

      <TouchableOpacity
        style={{
          backgroundColor: '#ffffff80',
          position: 'absolute',
          bottom: -75, left: -75,
          width: 150, height: 150,
          borderRadius: 75,
        }}
        onPress={toggleHelpAudio}
      >
        <View style={{ position: 'absolute', bottom: 85, left: 80 }} >
          <Icon name="record-voice-over" color="#3C233D" size={36} />
        </View>
      </TouchableOpacity>

      <ConfirmModal
        visible={confirmModalVisible}
        onConfirmAttempt={onConfirmAttempt}
      />

      {!!error
        ? <View style={styles.error}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        : null
      }
    </LinearGradient>
  )
}

export default SignUp
