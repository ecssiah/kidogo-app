import React from 'react'
import {
  View, Text, TextInput, Image
} from 'react-native'
import { Styles } from '../constants/Style';
import SecureInput from './SecureInput';
import Language from '../languages'


const CaregiverEntry = (props) => {
  return (
    <View style={Styles.container} >
      <Text style={[Styles.h1, { fontSize: 35 }, Styles.raleway]} >
        { Language.Caregiver }
      </Text>

      <Image
        source={require('../assets/images/caregiver.png')}
        style={Styles.img}
      />

      <TextInput
        style={Styles.input}
        value={props.username}
        onChangeText={props.onChangeUsername}
        blurOnSubmit={false}
      />

      <Text style={Styles.label} >
        { Language.Username }
      </Text>

      <SecureInput
        value={props.password}
        setValue={props.onChangePassword}
      />

      <Text style={Styles.label} >
        { Language.Password }
      </Text>

      <SecureInput
        value={props.passwordConfirm}
        setValue={props.onChangePasswordConfirm}
      />

      <Text style={Styles.label} >
        { Language.Confirm } { Language.Password }
      </Text>

      <TextInput
        style={Styles.input}
        value={props.firstName}
        blurOnSubmit={false}
        onChangeText={props.onChangeFirstName}
      />

      <Text style={Styles.label} >
        { Language.FirstName }
      </Text>

      <TextInput
        style={Styles.input}
        value={props.lastName}
        blurOnSubmit={false}
        onChangeText={props.onChangeLastName}
      />

      <Text style={Styles.label} >
        { Language.LastName }
      </Text>

      <TextInput
        style={Styles.input}
        value={props.email}
        onChangeText={props.onChangeEmail}
      />

      <Text style={Styles.label} >
        { Language.Email }
      </Text>

      <TextInput
        style={Styles.input}
        keyboardType="number-pad"
        value={props.phone}
        onChangeText={props.onChangePhone}
      />

      <Text style={Styles.label} >
        { Language.Phone }
      </Text>
    </View>
  )
}

export default CaregiverEntry