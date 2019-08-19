import React, { useState, useEffect } from 'react';
import {
  Image, View, Text, TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements'
import { Audio } from 'expo-av'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors, Styles } from '../constants/Style';
import { SignedIn } from '../utilities/auth';

import Spacer from '../components/Spacer'
import Error from '../components/Error';


const Home = (props) => {
  const [soundObject, setSoundObject] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    checkActiveCaregiver()
  }, [])


  const checkActiveCaregiver = async () => {
    if (await SignedIn()) {
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
      <Error message={error} />

      <Spacer height={240} />

      <Image
        style={Styles.homeTitle}
        source={require('../assets/images/kidogo.png')}
      />

      <Spacer medium />

      <TouchableOpacity
        style={Styles.mainButton}
        onPress={() => props.navigation.navigate('SignUp')}
      >
        <Text style={Styles.btnText}>Sign Up</Text>
      </TouchableOpacity>

      <Spacer medium />

      <TouchableOpacity
        style={Styles.mainButton}
        onPress={() => props.navigation.navigate('SignIn')}
      >
        <Text style={Styles.btnText}>Recover Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.helpButton}
        onPress={toggleHelpAudio}
      >
        <View style={Styles.helpButtonIcon} >
          <Icon name="record-voice-over" color={Colors.helpButton} size={36} />
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
}

export default Home
