import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import { Styles } from '../constants/Style';
import Language from '../languages'


const ContactEntry = (props) => {
  return (
    <View>
      <Text style={[Styles.h1, Styles.raleway]} >
        { Language.EmergencyContact }
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
        { Language.FirstName }
      </Text>

      <TextInput
        style={Styles.input}
        value={props.lastName}
        onChangeText={props.setLastName}
      />

      <Text style={Styles.label} >
        { Language.LastName }
      </Text>

      <TextInput
        style={Styles.input}
        maxLength={11}
        value={props.phone}
        keyboardType="number-pad"
        onChangeText={props.setPhone}
      />

      <Text style={Styles.label} >
        { Language.Phone }
      </Text>
    </View>
  )
}

export default ContactEntry
