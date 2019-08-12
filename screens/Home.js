import React, { useState, useEffect } from 'react';
import {
  Image, StyleSheet, View, Text, TextInput, TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements'
import { Audio } from 'expo-av'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors, Styles } from '../constants/Style';
import { UserSignedIn } from '../utilities/auth';

import Spacer from '../components/Spacer'


const Home = (props) => {
  const [soundObject, setSoundObject] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    checkSignIn()
  }, [])


  const checkSignIn = async () => {
    if (await UserSignedIn()) {
      props.navigation.navigate('Dash')
    }
  }


  const toggleHelpAudio = async () => {
    try {
      if (soundObject) {
        await soundObject.stopAsync()

        setSoundObject(null)
      } else {
        const soundObject = new Audio.Sound()
        await soundObject.loadAsync(require('../assets/audio/signin.mp3'))
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
      <Spacer xlarge />

      <Image
        style={Styles.homeLogo}
        source={require('../assets/images/kidogo_logo.png')}
      />

      <Spacer small />

      <TouchableOpacity
        style={Styles.signUpButton}
        onPress={() => props.navigation.navigate('SignUp')}
      >
        <Text style={Styles.btnText}>Sign Up</Text>
      </TouchableOpacity>

      <Spacer medium />

      <TouchableOpacity
        style={Styles.signUpButton}
        onPress={() => props.navigation.navigate('Recover')}
      >
        <Text style={Styles.btnText}>Recover Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#ffffff80',
          position: 'absolute',
          bottom: -75, left: -75,
          width: 150, height: 150,
          borderRadius: 75
        }}
        onPress={toggleHelpAudio}
      >
        <View style={{ position: 'absolute', bottom: 85, left: 80 }}>
          <Icon name="record-voice-over" color="#3C233D" size={36} />
        </View>
      </TouchableOpacity>

      {
        !!error === true
          ? <View style={Styles.error} >
              <Text style={Styles.errorText} >
                { error }
              </Text>
            </View>
          : null
      }
    </LinearGradient>
  );
}

export default Home
