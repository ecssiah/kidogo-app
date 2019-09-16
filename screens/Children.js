import React, { useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Audio } from 'expo-av'
import { ScrollView, TouchableOpacity, Text, View } from 'react-native'
import uuid from 'uuid'
import { Colors, Styles, Size } from '../constants/Style';
import { Icon } from 'react-native-elements';

import Spacer from '../components/Spacer';
import Error from '../components/Error';
import ChildEntry from '../components/ChildEntry';
import Backdrop from '../components/Backdrop';
import { SET_CHILD } from '../constants/Enrollment'


const Children = (props) => {
  const dispatch = useDispatch()

  const [id, setId] = useState(uuid())
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [gender, setGender] = useState('')
  const [note, setNote] = useState('')
  const [soundObject, setSoundObject] = useState(null)
  const [error, setError] = useState(null)

  const scrollRef = useRef(null)


  const onSubmitChild = () => {
    const child = {
      id,
      firstName,
      lastName,
      birthdate,
      gender,
      note,
    }

    dispatch({ type: SET_NEW_CHILD, id, child })
  }


  const onNextChild = () => {
    submitChild()
    setId(uuid())
    resetForm()
  }


  const onAddGuardians = async () => {
    props.navigation.navigate('Guardians')
  }


  const resetForm = () => {
    setFirstName('')
    setLastName('')
    setBirthdate('')
    setGender('')
    setNote('')

    scrollRef.current.scrollTo({ x: 0, y: 0, animated: false })
  }


  const toggleHelpAudio = async () => {
    try {
      if (soundObject) {
        await soundObject.stopAsync()

        setSoundObject(null)
      } else {
        const soundObject = new Audio.Sound()
        await soundObject.loadAsync(require('../assets/audio/children.mp3'))
        await soundObject.playAsync()

        setSoundObject(soundObject)
      }
    } catch(error) {
      console.error(error)
    }
  }


  return (
    <Backdrop>
      <Spacer height={Size.statusbar} />

      <Error message={error} />

      <ScrollView ref={scrollRef} >
        <ChildEntry
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          birthdate={birthdate}
          setBirthdate={setBirthdate}
          gender={gender}
          setGender={setGender}
          note={note}
          setNote={setNote}
        />

        <Spacer medium />

        <View style={Styles.rowButtons} >
          <TouchableOpacity
            style={Styles.pairButton}
            onPress={onSubmitChild}
          >
            <Text style={Styles.btnText}>Submit Child</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.pairButton}
            onPress={onNextChild}
          >
            <Text style={Styles.btnText}>Next Child</Text>
          </TouchableOpacity>
        </View>

        <Spacer medium />

        <TouchableOpacity
          style={Styles.mainButton}
          onPress={onAddGuardians}
        >
          <Text style={Styles.btnText}>Add Guardians</Text>
        </TouchableOpacity>

        <Spacer height={Size.keyboard} />
      </ScrollView>

      <TouchableOpacity
        style={Styles.helpButton}
        onPress={toggleHelpAudio}
      >
        <View style={Styles.helpButtonIcon} >
          <Icon name="record-voice-over" color={Colors.helpButton} size={36} />
        </View>
      </TouchableOpacity>

    </Backdrop>
  )
}

export default Children
