import React, { useState } from 'react'
import {
  View, Text, TextInput, Image, TouchableOpacity
} from 'react-native'
import { Icon } from 'react-native-elements'
import styles from './styles'

const CaregiverEntry = (props) => {
  const [hidePassword, setHidePassword] = useState(true)

  const toggleHidePassword = () => setHidePassword(!hidePassword)


  return (
    <View styles={styles.container} >
      <Text style={[styles.h1, { fontSize: 35 }, styles.raleway]} >
        Caregiver
      </Text>

      <Image
        source={require('../assets/images/caregiver.png')}
        style={styles.img}
      />

      <TextInput
        style={styles.input}
        value={props.username}
        onChangeText={props.onChangeUsername}
        blurOnSubmit={false}
      />

      <Text style={styles.label} >
        Username
      </Text>

      <View style={styles.passwordHolder}>
        <TextInput
          style={[
            styles.input,
            { flex: 0.9, marginRight: 0 },
          ]}
          secureTextEntry={hidePassword}
          value={props.password}
          onChangeText={props.onChangePassword}
          blurOnSubmit={false}
        />

        <View style={styles.showButton} >
          <TouchableOpacity onPress={toggleHidePassword} >
            <Icon
              color="white"
              name={hidePassword ? "visibility-off" : 'visibility'}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.label} >
        Password
      </Text>

      <TextInput
        style={styles.input}
        value={props.firstName}
        blurOnSubmit={false}
        onChangeText={props.onChangeFirstName}
      />

      <Text style={styles.label} >
        Name
      </Text>

      <TextInput
        style={styles.input}
        value={props.lastName}
        blurOnSubmit={false}
        onChangeText={props.onChangeLastName}
      />

      <Text style={styles.label} >
        Surname
      </Text>

      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        maxLength={11}
        value={props.phone}
        onChangeText={props.onChangePhone}
      />

      <Text style={styles.label} >
        Phone
      </Text>
    </View>
  )
}

export default CaregiverEntry