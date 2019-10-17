import React, { useState } from 'react'
import {
  Image, Text, TextInput, TouchableOpacity, View
} from 'react-native'
import { Icon } from 'react-native-elements';
import { Styles } from '../constants/Style';
import Language from '../languages'
import SecureInput from './SecureInput';


const GuardianEntry = (props) => {
  const [hideId, setHideId] = useState(true)


  const toggleHideId = () => setHideId(!hideId)


  return (
    <View>
      <Text style={[Styles.h1, Styles.raleway]} >
        { Language.Guardian }
      </Text>

      <Image
        style={Styles.img}
        source={require('../assets/images/guardian.png')}
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
        value={props.address}
        style={Styles.input}
        onChangeText={props.setAddress}
      />

      <Text style={Styles.label} >
        { Language.Location }
      </Text>

      <TextInput
        value={props.city}
        style={Styles.input}
        onChangeText={props.setCity}
      />

      <Text style={Styles.label} >
        { Language.City }
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

      <SecureInput
        value={props.govtId}
        setValue={props.setGovtId}
      />

      <Text style={Styles.label} >
        { Language.IdentificationNumber }
      </Text>
    </View>
  )
}

export default GuardianEntry
