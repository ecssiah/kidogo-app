import React, { useState } from 'react'
import {
  Image, ScrollView, Text, TextInput, TouchableOpacity, View
} from 'react-native'
import { Icon } from 'react-native-elements';
import { Styles, Colors, TopMargin } from '../constants/Style';

import Spacer from '../components/Spacer';
import Error from '../components/Error';


const GuardianEntry = (props) => {
  const [hideId, setHideId] = useState(true)


  const toggleHideId = () => setHideId(!hideId)


  return (
    <View>
      <Text style={[Styles.h1, Styles.raleway]} >
        Guardian
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
        value={props.address}
        style={Styles.input}
        onChangeText={props.setAddress}
      />

      <Text style={Styles.label} >
        Mahali
      </Text>

      <TextInput
        value={props.city}
        style={Styles.input}
        onChangeText={props.setCity}
      />

      <Text style={Styles.label} >
        Mji
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

      <View style={Styles.passwordHolder}>
        <TextInput
          keyboardType="number-pad"
          style={[Styles.input, { flex: 0.9, marginRight: 0 }]}
          maxLength={8}
          secureTextEntry={hideId}
          value={props.govtId}
          onChangeText={props.setGovtId}
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
    </View>
  )
}

export default GuardianEntry
