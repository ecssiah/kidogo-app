import React, { useState } from 'react';
import {
  Image, StyleSheet, View, Text, TextInput, TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements'
import { Audio } from 'expo-av'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '../constants/Style';
import styles from '../components/styles'

import Spacer from '../components/Spacer'


const Home = (props) => {
  const [soundObject, setSoundObject] = useState(null)
  const [error, setError] = useState(null)


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
        style={styles.homeLogo}
        source={require('../assets/images/kidogo_logo.png')}
      />

      <Spacer small />

      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => props.navigation.navigate('SignUp')}
      >
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>

      <Spacer medium />

      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => props.navigation.navigate('Recover')}
      >
        <Text style={styles.btnText}>Recover Account</Text>
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
          ? <View style={styles.error} >
              <Text style={styles.errorText} >
                { error }
              </Text>
            </View>
          : null
      }
    </LinearGradient>
  );
}

export default Home
