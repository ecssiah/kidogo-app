import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView
} from 'react-native';
import { Audio } from 'expo-av'
import { Styles, Size } from '../constants/Style';
import { Icon } from 'react-native-elements'
import { SignUpCaregiver } from '../utilities/auth'
import uuid from 'uuid'

import Loading from '../components/Loading'
import Spacer from '../components/Spacer'
import CaregiverEntry from '../components/CaregiverEntry'
import CentreEntry from '../components/CentreEntry'
import Message from '../components/Message';
import Backdrop from '../components/Backdrop';
import Language from '../languages'


const SignUp = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [centreName, setCentreName] = useState('')
  const [address, setAddress] = useState('')
  const [location, setLocation] = useState('')
  const [city, setCity] = useState('')
  const [callbackId, setCallbackId] = useState(null)
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [soundObject, setSoundObject] = useState(null)


  const onSignUp = async () => {
    setLoading(true)

    const userData = {
      username,
      password,
      email,
      phone,
    }

    const caregiverData = {
      id: uuid(),
      username,
      password,
      email,
      firstName,
      lastName,
      phone,
      centreName,
      address,
      location,
      city,
    }

    const signUpResult = await SignUpCaregiver(userData)

    setLoading(false)

    if (signUpResult.message) {
      setError(signUpResult.message)
    } else {
      props.navigation.navigate('Confirm', { caregiverData })
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
      setError(error)
    }
  }


  const setError = (text) => {
    clearTimeout(callbackId)
    setMessage(text)
    setCallbackId(setTimeout(() => setMessage(null), 4000))
  }


  return (
    <Backdrop>
      <Spacer height={Size.statusbar} />

      <Message text={message} />

      {loading
        ? <Loading />
        : <ScrollView >
            <Spacer height={40} />

            <CaregiverEntry
              username={username}
              password={password}
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
              location={location}
              city={city}
              onChangeCentreName={setCentreName}
              onChangeAddress={setAddress}
              onChangeLocation={setLocation}
              onChangeCity={setCity}
            />

            <Spacer large />

            <TouchableOpacity
              style={Styles.mainButton}
              onPress={onSignUp}
            >
              <Text style={Styles.buttonText}>{ Language.Confirm }</Text>
            </TouchableOpacity>

            <Spacer height={322} />
          </ScrollView>
      }

      <TouchableOpacity
        style={Styles.helpButton}
        onPress={toggleHelpAudio}
      >
        <View style={Styles.helpButtonIcon} >
          <Icon name="record-voice-over" color="#3C233D" size={36} />
        </View>
      </TouchableOpacity>
    </Backdrop>
  )
}

export default SignUp
