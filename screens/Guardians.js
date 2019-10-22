import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Image, ScrollView, Text, TextInput, TouchableOpacity, View
} from 'react-native'
import uuid from 'uuid'
import { Audio } from 'expo-av'
import { Icon } from 'react-native-elements';
import { Styles, Colors, Size } from '../constants/Style';

import Spacer from '../components/Spacer';
import Message from '../components/Message';
import GuardianEntry from '../components/GuardianEntry';
import { SET_NEW_GUARDIAN, Relation } from '../constants/Enrollment';
import Backdrop from '../components/Backdrop';
import Language from '../languages'


const Guardians = (props) => {
  const dispatch = useDispatch()

  const [id, setId] = useState(uuid())
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [govtId, setGovtId] = useState('')
  const [relation, setRelation] = useState(Relation.Mother)
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [soundObject, setSoundObject] = useState(null)
  const [message, setMessage] = useState(null)

  const scrollRef = useRef(null)


  const onSubmitGuardian = () => {
    const guardian = {
      id,
      firstName,
      lastName,
      phone,
      govtId,
      address,
      city,
      relation,
    }

    dispatch({ type: SET_NEW_GUARDIAN, id, guardian })

    setMessage("Guardian information submitted")
    setTimeout(() => setMessage(null), 2000)
  }


  const onNextGuardian = () => {
    onSubmitGuardian()
    setId(uuid())
    resetForm()
  }


  const onAddContacts = async () => {
    props.navigation.navigate('Contacts')
  }


  const resetForm = () => {
    scrollRef.current.scrollTo({ x: 0, y: 0, animated: false })

    setFirstName('')
    setLastName('')
    setPhone('')
    setGovtId('')
    setAddress('')
    setCity('')
    setRelation(Relation.Mother)
  }


  const toggleHelpAudio = async () => {
    try {
      if (soundObject) {
        await soundObject.stopAsync()

        setSoundObject(null)
      } else {
        const soundObject = new Audio.Sound()
        await soundObject.loadAsync(require('../assets/audio/guardians.mp3'))
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

      <Message text={message} />

      <ScrollView ref={scrollRef} >
        <GuardianEntry
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          phone={phone}
          setPhone={setPhone}
          govtId={govtId}
          setGovtId={setGovtId}
          address={address}
          setAddress={setAddress}
          city={city}
          setCity={setCity}
          relation={relation}
          setRelation={setRelation}
        />

        <Spacer large />

        <View style={Styles.rowElements} >
          <TouchableOpacity
            style={Styles.rowButton}
            onPress={onSubmitGuardian}
          >
            <Text style={Styles.buttonText} >
              { Language.Submit }
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.rowButton}
            onPress={onNextGuardian}
          >
            <Text style={Styles.buttonText} >
              { Language.Next }
            </Text>
          </TouchableOpacity>
        </View>

        <Spacer medium />

        <TouchableOpacity
          style={Styles.mainButton}
          onPress={onAddContacts}
        >
          <Text style={Styles.buttonText} >
            { Language.Add } { Language.Contacts }
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

export default Guardians
