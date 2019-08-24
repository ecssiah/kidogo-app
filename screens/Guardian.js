import React, { useRef, useState } from 'react'
import {
  Image, ScrollView, Text, TextInput, TouchableOpacity, View
} from 'react-native'
import uuid from 'uuid'
import { Audio } from 'expo-av'
import { Icon } from 'react-native-elements';
import { Styles, Colors, TopMargin } from '../constants/Style';

import Spacer from '../components/Spacer';
import Error from '../components/Error';
import GuardianEntry from '../components/GuardianEntry';
import { Frequency } from '../constants/Enrollment';
import { Create } from '../utilities/localstore';
import Backdrop from '../components/Backdrop';
import Loading from '../components/Loading';
import { GUARDIANS } from '../constants/Store';


const Guardian = (props) => {
  const [accountId, setAccountId] = useState(uuid())
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
    resetForm()

    setLoading(true)

    const guardianData = {
      accountId,
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

    await Create(GUARDIANS, guardianData.id, guardianData)

    setLoading(false)
  }


  const onAddContacts = async () => {
    props.navigation.navigate('Contacts', { accountId })
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
      <Spacer height={TopMargin} />

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

            <Spacer height={320} />
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

export default Guardian
