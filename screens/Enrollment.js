import React, { useState } from 'react'
import { ScrollView, TouchableOpacity, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors, Styles, TopMargin } from '../constants/Style';
import { Icon } from 'react-native-elements';

import ChildEntry from '../components/ChildEntry';
import GuardianEntry from './Guardian';
import EmergencyContactEntry from '../components/EmergencyContactEntry';
import Error from '../components/Error';
import Spacer from '../components/Spacer';


const Enrollment = (props) => {
  const [error, setError] = useState('')
  const [focus, setFocus] = useState('CHILD')
  const [numChildren, setNumChildren] = useState(1)


  const onAddNewChildForm = () => {
    setNumChildren(numChildren + 1)
  }

  const onRemoveNewChildForm = () => {
    if (numChildren > 1) {
      setNumChildren(numChildren - 1)
    }
  }


  const getChildEntries = () => {
    const childEntries = []

    for (let i = 0; i < numChildren; i++) {
      childEntries.push(
        <ChildEntry key={i} />
      )
    }

    return childEntries
  }


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
          await soundObject.loadAsync(require('../assets/audio/guardians.mp3'))
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

      <ScrollView>
        <GuardianEntry
          navigate={props.navigation.navigate}
        >

        </GuardianEntry>

        <EmergencyContactEntry
          navigate={props.navigation.navigate}
        >

        </EmergencyContactEntry>

        { getChildEntries() }

        <View style={Styles.rowButtons} >
          <TouchableOpacity
            style={[Styles.mainButton, { flex: 0.5, marginLeft: 5 }]}
            onPress={onRemoveNewChildForm}
          >
            <Text style={Styles.btnText}>Remove Child</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.mainButton, { flex: 0.5, marginLeft: 5 }]}
            onPress={onAddNewChildForm}
          >
            <Text style={Styles.btnText}>Add Child</Text>
          </TouchableOpacity>
        </View>

        <Spacer height={320} />
      </ScrollView>

      <TouchableOpacity
        style={Styles.helpButton}
        onPress={toggleHelpAudio}
      >
        <View style={Styles.helpButtonIcon} >
          <Icon
            name="record-voice-over"
            size={36}
            color={Colors.helpButton}
          />
        </View>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default Enrollment