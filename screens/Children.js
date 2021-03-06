import React, { useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Audio } from 'expo-av'
import { ScrollView, TouchableOpacity, Text, View } from 'react-native'
import uuid from 'uuid'
import { Colors, Styles, Size } from '../constants/Style';
import { Icon } from 'react-native-elements';
import Language from '../languages'

import Spacer from '../components/Spacer';
import ChildEntry from '../components/ChildEntry';
import Backdrop from '../components/Backdrop';
import { SET_NEW_CHILD } from '../constants/Enrollment'
import Message from '../components/Message'


const Children = (props) => {
  const dispatch = useDispatch()

  const [id, setId] = useState(uuid())
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [gender, setGender] = useState('')
  const [immunization, setImmunization] = useState(false)
  const [note, setNote] = useState('')
  const [soundObject, setSoundObject] = useState(null)
  const [callbackId, setCallbackId] = useState(null)
  const [message, setMessage] = useState(null)

  const scrollRef = useRef(null)


  const onSubmitChild = () => {
    const child = {
      id,
      firstName,
      lastName,
      birthdate,
      gender,
      immunization,
      note,
    }

    dispatch({ type: SET_NEW_CHILD, id, child })
  }


  const onPrevChild = () => {

  }


  const onNextChild = () => {
    onSubmitChild()
    setError("Child information submitted")
    setId(uuid())
    resetForm()
  }


  const onAddGuardians = async () => {
    onSubmitChild()
    clearTimeout(callbackId)
    props.navigation.navigate('Guardians')
  }


  const resetForm = () => {
    setFirstName('')
    setLastName('')
    setBirthdate('')
    setGender('')
    setImmunization(false)
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
          immunization={immunization}
          setImmunization={setImmunization}
          note={note}
          setNote={setNote}
        />

        <Spacer medium />

        <TouchableOpacity
          style={Styles.mainButton}
          onPress={onNextChild}
        >
          <Text style={Styles.buttonText} >
            { Language.Next } { Language.Child }
          </Text>
        </TouchableOpacity>

        <Spacer medium />

        <TouchableOpacity
          style={Styles.mainButton}
          onPress={onAddGuardians}
        >
          <Text style={Styles.buttonText}>
            { Language.Add } { Language.Guardians }
          </Text>
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
