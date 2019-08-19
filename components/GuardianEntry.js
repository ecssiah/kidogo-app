import React, { useState } from 'react'
import {
  Image, Picker, ScrollView, Text, TextInput, TouchableOpacity, View
} from 'react-native'
import { Icon } from 'react-native-elements';
import { Styles, Colors, TopMargin } from '../constants/Style';
import { Frequency } from '../constants/Enrollment';

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

      <View style={Styles.nameHolder}>
        <View style={{ flex: .5, marginRight: 5 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={Styles.prefix} >
              K
            </Text>

            <TextInput
              style={[Styles.input, { flex: .8, marginLeft: 0 }]}
              keyboardType="number-pad"
              value={props.rate}
              onChangeText={props.setRate}
            />
          </View>

          <Text style={Styles.label} >
            Kiwango
          </Text>
        </View>

        <View style={{ flex: .5, marginLeft: 5 }}>
          <View style={[Styles.input, { height: 30, paddingLeft: 0 }]} >
            <Picker
              style={{ color: 'white', marginTop: -10 }}
              selectedValue={props.frequency}
              onValueChange={(value, index) => props.setFrequency(value)}
            >
              <Picker.Item label={Frequency.DAILY} value={Frequency.DAILY} />
              <Picker.Item label={Frequency.WEEKLY} value={Frequency.WEEKLY} />
              <Picker.Item label={Frequency.TERMLY} value={Frequency.TERMLY} />
            </Picker>
          </View>

          <Text style={Styles.label}>
            Mara ngapi
          </Text>
        </View>
      </View>
    </View>
  )
}

export default GuardianEntry
