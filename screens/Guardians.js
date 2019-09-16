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
import { Frequency, SET_NEW_GUARDIAN } from '../constants/Enrollment';
import Backdrop from '../components/Backdrop';


const Guardians = (props) => {
  const dispatch = useDispatch()

  const [id, setId] = useState(uuid())
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [govtId, setGovtId] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [rate, setRate] = useState('')
  const [frequency, setFrequency] = useState(Frequency.DAILY)
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
      rate,
      frequency,
    }

    dispatch({ type: SET_NEW_GUARDIAN, id, guardian })
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
    setRate('')
    setFrequency(Frequency.DAILY)
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
          rate={rate}
          setRate={setRate}
          frequency={frequency}
          setFrequency={setFrequency}
        />

        <Spacer large />

        <View style={Styles.rowButtons} >
          <TouchableOpacity
            style={Styles.pairButton}
            onPress={onSubmitGuardian}
          >
            <Text style={Styles.btnText}>Submit Guardian</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.pairButton}
            onPress={onNextGuardian}
          >
            <Text style={Styles.btnText}>Next Guardian</Text>
          </TouchableOpacity>
        </View>

        <Spacer medium />

        <TouchableOpacity
          style={Styles.mainButton}
          onPress={onAddContacts}
        >
          <Text style={Styles.btnText}>Add Contacts</Text>
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
