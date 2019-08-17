import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors, Styles, TopMargin } from '../constants/Style';

import ChildEntry from '../components/ChildEntry';
import GuardianEntry from '../components/GuardianEntry';
import EmergencyContactEntry from '../components/EmergencyContactEntry';
import Error from '../components/Error';
import Spacer from '../components/Spacer';


const Enrollment = (props) => {
  const [error, setError] = useState('')
  const [focus, setFocus] = useState('CHILD')


  const toggleHelpAudio = async () => {
    try {
      if (soundObject) {
        await soundObject.stopAsync()

        setSoundObject(null)
      } else {
        const soundObject = new Audio.Sound()

        if (focus === 'CHILD') {
          await soundObject.loadAsync(require('../assets/audio/children.mp3'))
        } else if (focus === 'GUARDIAN') {
          await soundObject.loadAsync(require('../assets/audio/guardian.mp3'))
        } else if (focus === 'CONTACT') {
          await soundObject.loadAsync(require('../assets/audio/contacts.mp3'))
        }

        await soundObject.playAsync()

        setSoundObject(soundObject)
      }
    } catch(error) {
      console.error(error)
    }
  }


  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[Colors.gradient_dark, Colors.gradient_light]}
    >
      <Spacer height={TopMargin} />

      <Error message={error} />

      <Text style={[Styles.h1, Styles.raleway]} >
        Add New Child
      </Text>

      <ChildEntry
      >

      </ChildEntry>

      <GuardianEntry
      >

      </GuardianEntry>

      <EmergencyContactEntry
      >

      </EmergencyContactEntry>

      <TouchableOpacity
        style={Styles.helpButton}
        onPress={toggleHelpAudio}
      >
        <View style={Styles.helpButtonIcon} >
          <Icon name="record-voice-over" color={Colors.helpButton} size={36} />
        </View>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default Enrollment