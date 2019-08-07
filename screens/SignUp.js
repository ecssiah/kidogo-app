import React from 'react';
import { Audio } from 'expo-av'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '../constants/Style';
import { Icon } from 'react-native-elements'
import {
  Image, StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView
} from 'react-native';
import styles from '../components/styles'

import Spacer from '../components/Spacer'
import CaregiverEntry from '../components/CaregiverEntry'
import CentreEntry from '../components/CentreEntry'
import ConfirmModal from '../components/ConfirmModal';

const SignUp = (props) => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [centreName, setCentreName] = React.useState('')
  const [address1, setAddress1] = React.useState('')
  const [address2, setAddress2] = React.useState('')
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [soundObject, setSoundObject] = React.useState(null)
  const [confirmModalVisible, setConfirmModalVisible] = React.useState(false)


  const onSignUp = async () => {

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
      showError(error)
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
      <ScrollView >
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
          address1={address1}
          address2={address2}
          onChangeCentreName={setCentreName}
          onChangeAddress1={setAddress1}
          onChangeAddress2={setAddress2}
        />

        <View
          style={{
            marginVertical: 20,
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flex: 0.5 }} />
          <TouchableOpacity
            style={[
              styles.button,
              { marginVertical: 20, flex: 0.5, alignSelf: 'flex-end' }
            ]}
            onPress={onSignUp}
          >
            <Text style={styles.btnText}>Confirm Signup</Text>
          </TouchableOpacity>
        </View>

        <Spacer height={322} />
      </ScrollView>

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
        showError={showError}
        visible={confirmModalVisible}
      />

      { loading ? <Loading /> : null }

      {
        !!error
          ? <View style={styles.error}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          : null
      }
    </LinearGradient>
  )
}

export default SignUp
