import React, { useState } from 'react'
import { Image, Modal, Picker, Text, TextInput, View } from 'react-native'
import Language from '../languages'
import { Styles } from '../constants/Style'


const ContactModal = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')


  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.visible}
      onRequestClose={() => { }}
    >
      <Text style={[Styles.h1, Styles.raleway]} >
        { Language.Contact }
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
        style={Styles.input}
        value={phone}
        onChangeText={setPhone}
      />

      <Text style={Styles.label} >
        { Language.Phone }
      </Text>
    </Modal>
  )
}

export default ContactModal
