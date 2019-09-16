import React, { useState, useEffect } from 'react';
import {
  Image, View, Text, TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements'
import { Audio } from 'expo-av'
import { Colors, Styles } from '../constants/Style';
import { SignedIn } from '../utilities/auth';

import Spacer from '../components/Spacer'
import Message from '../components/Message';
import Backdrop from '../components/Backdrop';


const Home = (props) => {
  const [soundObject, setSoundObject] = useState(null)
  const [message, setMessage] = useState(null)

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


  return (
    <Backdrop>
      <Message text={message} />

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
    </Backdrop>
  );
}

export default Home
