import React, { useState } from 'react'
import {
  View, Text, TextInput, Image,
} from 'react-native'
import styles from './styles'


const CentreEntry = (props) => {
  return (
    <View>
      <Text style={styles.h1}>Centre</Text>

      <Image
        style={styles.img}
        source={require('../assets/images/centre.png')}
      />

      <TextInput
        style={styles.input}
        blurOnSubmit={false}
        value={props.centreName}
        onChangeText={props.onChangeCentreName}
      />

      <Text style={styles.label} >
        Centre Name
      </Text>

      <TextInput
        style={styles.input}
        blurOnSubmit={false}
        value={props.address}
        onChangeText={props.onChangeAddress}
      />

      <Text style={styles.label} >
        Address
      </Text>

      <TextInput
        style={styles.input}
        blurOnSubmit={false}
        value={props.city}
        onChangeText={props.onChangeCity}
      />

      <Text style={styles.label} >
        City
      </Text>
    </View>
  )
}

export default CentreEntry