import React, { useState } from 'react'
import {
  View, Text, TextInput, Image,
} from 'react-native'
import { Styles } from '../constants/Style';


const CentreEntry = (props) => {
  return (
    <View>
      <Text style={Styles.h1}>Centre</Text>

      <Image
        style={Styles.img}
        source={require('../assets/images/centre.png')}
      />

      <TextInput
        style={Styles.input}
        blurOnSubmit={false}
        value={props.centreName}
        onChangeText={props.onChangeCentreName}
      />

      <Text style={Styles.label} >
        Centre Name
      </Text>

      <TextInput
        style={Styles.input}
        blurOnSubmit={false}
        value={props.address}
        onChangeText={props.onChangeAddress}
      />

      <Text style={Styles.label} >
        Address
      </Text>

      <TextInput
        style={Styles.input}
        blurOnSubmit={false}
        value={props.location}
        onChangeText={props.onChangeLocation}
      />

      <Text style={Styles.label} >
        Location
      </Text>

      <TextInput
        style={Styles.input}
        blurOnSubmit={false}
        value={props.city}
        onChangeText={props.onChangeCity}
      />

      <Text style={Styles.label} >
        City
      </Text>
    </View>
  )
}

export default CentreEntry