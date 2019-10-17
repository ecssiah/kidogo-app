import React, { useState } from 'react'
import {
  View, Text, TextInput, Image, TouchableOpacity
} from 'react-native'
import { Icon } from 'react-native-elements'
import { Styles } from '../constants/Style';


const CaregiverEntry = (props) => {
  const [hidePassword, setHidePassword] = useState(true)

  const toggleHidePassword = () => setHidePassword(!hidePassword)

  // TODO: Use SecureInput component

  return (
    <View style={Styles.container} >
      <Text style={[Styles.h1, { fontSize: 35 }, Styles.raleway]} >
        Caregiver
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
        Username
      </Text>

      <View style={Styles.passwordHolder}>
        <TextInput
          style={[
            Styles.input,
            { flex: 0.9, marginRight: 0 },
          ]}
          secureTextEntry={hidePassword}
          value={props.password}
          onChangeText={props.onChangePassword}
          blurOnSubmit={false}
        />

        <View style={Styles.showButton} >
          <TouchableOpacity onPress={toggleHidePassword} >
            <Icon
              color="white"
              name={hidePassword ? "visibility-off" : 'visibility'}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={Styles.label} >
        Password
      </Text>

      <TextInput
        style={Styles.input}
        value={props.firstName}
        blurOnSubmit={false}
        onChangeText={props.onChangeFirstName}
      />

      <Text style={Styles.label} >
        Name
      </Text>

      <TextInput
        style={Styles.input}
        value={props.lastName}
        blurOnSubmit={false}
        onChangeText={props.onChangeLastName}
      />

      <Text style={Styles.label} >
        Surname
      </Text>

      <TextInput
        style={Styles.input}
        value={props.email}
        onChangeText={props.onChangeEmail}
      />

      <Text style={Styles.label} >
        Email
      </Text>

      <TextInput
        style={Styles.input}
        keyboardType="number-pad"
        value={props.phone}
        onChangeText={props.onChangePhone}
      />

      <Text style={Styles.label} >
        Phone
      </Text>
    </View>
  )
}

export default CaregiverEntry