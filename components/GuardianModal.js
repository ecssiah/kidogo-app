import React, { useState } from 'react'
import {
  Image, Modal, Text, TextInput, TouchableOpacity, View
} from 'react-native'
import { Icon } from 'react-native-elements'
import Language from '../languages'
import { Styles } from '../constants/Style'


const GuardianModal = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [phone, setPhone] = useState('')
  const [hideId, setHideId] = useState(false)
  const [govtId, setGovtId] = useState('')


  const toggleHideId = () => setHideId(!hideId)


  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.visible}
      onRequestClose={() => { }}
    >
      <Text style={[Styles.h1, Styles.raleway]} >
        { Language.Guardian }
      </Text>

      <Image
        style={Styles.img}
        source={require('../assets/images/child.png')}
      />

      <TextInput
        style={Styles.input}
        value={firstName}
        onChangeText={setFirstName}
      />

      <Text style={Styles.label} >
        { Language.FirstName }
      </Text>

      <TextInput
        style={Styles.input}
        value={lastName}
        onChangeText={setLastName}
      />

      <Text style={Styles.label} >
        { Language.LastName }
      </Text>

      <TextInput
        value={address}
        style={Styles.input}
        onChangeText={setAddress}
      />

      <Text style={Styles.label} >
        { Language.Location }
      </Text>

      <TextInput
        value={city}
        style={Styles.input}
        onChangeText={setCity}
      />

      <Text style={Styles.label} >
        { Language.City }
      </Text>

      <TextInput
        style={Styles.input}
        maxLength={11}
        value={phone}
        keyboardType="number-pad"
        onChangeText={setPhone}
      />

      <Text style={Styles.label} >
        { Language.Phone }
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
        { Language.IdentificationNumber }
      </Text>
    </Modal>
  )
}

export default GuardianModal