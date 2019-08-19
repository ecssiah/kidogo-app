import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import {
  Image, ScrollView, Text, TextInput, TouchableOpacity, View
} from 'react-native'
import { Icon } from 'react-native-elements';
import { Styles, Colors, TopMargin } from '../constants/Style';

import RateEntry from '../components/RateEntry';
import Spacer from '../components/Spacer';
import Error from '../components/Error';


const Guardian = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [govtId, setGovtId] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [frequency, setFrequency] = useState('daily')
  const [rate, setRate] = useState('100')
  const [hideId, setHideId] = useState(true)
  const [error, setError] = useState(null)


  const toggleHideId = () => setHideId(!hideId)


  const handleNumberChange = () => {

  }


  const pickerChange = () => {

  }


  const onNext = () => {
    props.navigation.navigate('Children')
  }


  const getRateComponent = () => {
    if (props.accountAlreadyCreated) {
      return null
    } else {
      return (
        <RateEntry
          rate={rate}
          frequency={frequency}
          pickerChange={pickerChange}
          handleNumberChange={handleNumberChange}
        />
      )
    }
  }


  const addAnotherGuardian = () => {
    const guardianData = {
      firstName,
      lastName,
      phone,
      govtId,
      address,
      city,
      frequency,
      rate,
    }

    props.addToAccount(guardianData, 'guardians')

    setFirstName('')
    setLastName('')
    setPhone('')
    setGovtId('')
    setAddress('')
    setCity('')
    setFrequency('daily')
    setRate('100')
  }


  const addGuardian = () => {
    const guardianData = {
      firstName,
      lastName,
      phone,
      govtId,
      address,
      city,
      frequency,
      rate,
    }

    props.addMember('guardians', guardianData)
  }


  const addGuardianWithEmergencyContact = () => {
    const guardianData = {
      firstName,
      lastName,
      phone,
      govtId,
      address,
      city,
      frequency,
      rate,
    }

    props.addToAccount(guardianData, 'guardians')
  }


  const getAddComponent = () => {
    if (firstName && lastName && phone && phone.length === 11) {
      return (
        <TouchableOpacity
          style={[Styles.button, { flex: .5, marginTop: 20 }]}
          onPress={addGuardian}
        >
          <Text style={Styles.nextText}>
            Add
          </Text>
        </TouchableOpacity>
      )
    } else {
      return null
    }
  }


  const getBottomComponent = () => {
    if (props.accountAlreadyCreated) {
      return (
        <View style={Styles.nameHolder}>
          <TouchableOpacity
            style={[Styles.ready, { flex: .5, marginTop: 20 }]}
            onPress={() => props.openForm('guardians')}
          >
            <Text
              style={[Styles.nextText, { textAlign: 'left', marginLeft: 10 }]}
            >
              Cancel
            </Text>
          </TouchableOpacity>

          { getAddComponent() }
        </View>
      )
    } else {
      if (firstName && lastName && rate && frequency && phone && phone.length === 11) {
        return (
          <View style={{ flexDirection: 'row', marginTop: 20, marginHorizontal: 10 }}>
            <TouchableOpacity
              style={[Styles.button, { flex: 0.5, marginRight: 5 }]}
              onPress={addAnotherGuardian}
            >
              <Text style={Styles.btnText} >
                Add Another
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[Styles.button, { flex: 0.5, marginLeft: 5 }]}
              onPress={addGuardianWithEmergencyContact}
            >
              <Text style={Styles.btnText}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        )
      } else {
        return null
      }
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
        <Text style={[Styles.h1, Styles.raleway]} >
          Guardian
        </Text>

        <Image
          style={Styles.img}
          source={require('../assets/images/guardian.png')}
        />

        <TextInput
          style={Styles.input}
          value={firstName}
          onChangeText={setFirstName}
        />

        <Text style={Styles.label} >
          Jina ya Kwanza
        </Text>

        <TextInput
          style={Styles.input}
          value={lastName}
          onChangeText={setLastName}
        />

        <Text style={Styles.label} >
          Ama Familia
        </Text>

        <TextInput
          value={address}
          style={Styles.input}
          onChangeText={setAddress}
        />

        <Text style={Styles.label} >
          Mahali
        </Text>

        <TextInput
          value={city}
          style={Styles.input}
          onChangeText={setCity}
        />

        <Text style={Styles.label} >
          Mji
        </Text>

        <TextInput
          style={Styles.input}
          maxLength={11}
          value={phone}
          keyboardType="number-pad"
          onChangeText={setPhone}
        />

        <Text style={Styles.label} >
          Nambari ya Simu
        </Text>

        <View style={Styles.passwordHolder}>
          <TextInput
            keyboardType="number-pad"
            style={[Styles.input, { flex: 0.9, marginRight: 0 }]}
            maxLength={8}
            secureTextEntry={hideId}
            value={govtId}
            onChangeText={setGovtId}
          />

          <View style={Styles.showButton} >
            <TouchableOpacity onPress={toggleHideId} >
              <Icon
                color="white"
                name={hideId ? "visibility-off" : 'visibility'}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={Styles.label} >
          Nambari ya Kitambulisho
        </Text>

        { getRateComponent() }

        { getBottomComponent() }

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
