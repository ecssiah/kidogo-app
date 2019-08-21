import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import { Styles } from '../constants/Style';


const ContactEntry = (props) => {
  return (
    <View>
      <Text style={[Styles.h1, Styles.raleway]} >
        Emergency Contact
      </Text>

      <Image
        style={Styles.img}
        source={require('../assets/images/econtact.png')}
      />

      <TextInput
        style={Styles.input}
        value={props.firstName}
        onChangeText={props.setFirstName}
      />

      <Text style={Styles.label} >
        Jina ya Kwanza
      </Text>

      <TextInput
        style={Styles.input}
        value={props.lastName}
        onChangeText={props.setLastName}
      />

      <Text style={Styles.label} >
        Ama Familia
      </Text>

      <TextInput
        style={Styles.input}
        maxLength={11}
        value={props.phone}
        keyboardType="number-pad"
        onChangeText={props.setPhone}
      />

      <Text style={Styles.label} >
        Nambari ya Simu
      </Text>
    </View>
  )
}

export default ContactEntry
