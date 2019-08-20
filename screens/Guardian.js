import React, { useSelector, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import {
  Image, ScrollView, Text, TextInput, TouchableOpacity, View
} from 'react-native'
import uuid from 'uuid'
import { Icon } from 'react-native-elements';
import { Styles, Colors, TopMargin } from '../constants/Style';

import Spacer from '../components/Spacer';
import Error from '../components/Error';
import EmergencyContactEntry from '../components/EmergencyContactEntry';
import GuardianEntry from '../components/GuardianEntry';
import { Frequency } from '../constants/Enrollment';
import { CreateGuardian } from '../utilities/localstore';


const Guardian = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [govtId, setGovtId] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [rate, setRate] = useState('100')
  const [frequency, setFrequency] = useState(Frequency.DAILY)
  const [ecFirstName, setECFirstName] = useState('')
  const [ecLastName, setECLastName] = useState('')
  const [ecPhone, setECPhone] = useState('')
  const [error, setError] = useState(null)


  const onNext = async () => {
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
      ecFirstName,
      ecLastName,
      ecPhone,
    }

    await CreateGuardian(guardianData)

    props.navigation.navigate('Children', { guardianId: guardianData.id })
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

        <EmergencyContactEntry
          firstName={ecFirstName}
          setFirstName={setECFirstName}
          lastName={ecLastName}
          setLastName={setECLastName}
          phone={ecPhone}
          setPhone={setECPhone}
        />

        <Spacer large />

        <TouchableOpacity
          style={Styles.mainButton}
          onPress={onNext}
        >
          <Text style={Styles.btnText}>Add Children</Text>
        </TouchableOpacity>

        <Spacer height={320} />
      </ScrollView>
    </LinearGradient>
  )
}

export default Guardian
