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
import Error from '../components/Error';
import GuardianEntry from '../components/GuardianEntry';
import { Frequency, SET_GUARDIAN } from '../constants/Enrollment';
import Backdrop from '../components/Backdrop';
import Loading from '../components/Loading';


const Guardians = (props) => {
  const dispatch = useDispatch()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [govtId, setGovtId] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [rate, setRate] = useState('')
  const [frequency, setFrequency] = useState(Frequency.DAILY)
  const [soundObject, setSoundObject] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const scrollRef = useRef(null)


  const onNextGuardian = async () => {
    setLoading(true)

    const guardianData = {
      id: uuid(),
      firstName,
      lastName,
      phone,
      govtId,
      address,
      city,
      rate,
      frequency,
    }

    resetForm()

    dispatch({ type: SET_GUARDIAN, guardian: guardianData })

    setLoading(false)
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

      <Error message={error} />

      {loading
        ? <Loading />
        : <ScrollView ref={scrollRef} >
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
                onPress={onNextGuardian}
              >
                <Text style={Styles.btnText}>Next Guardian</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={Styles.pairButton}
                onPress={onAddContacts}
              >
                <Text style={Styles.btnText}>Add Contacts</Text>
              </TouchableOpacity>
            </View>

            <Spacer height={Size.keyboard} />
          </ScrollView>
      }

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
