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
        value={props.address1}
        onChangeText={props.onChangeAddress1}
      />

      <Text style={styles.label} >
        Address
      </Text>

      <TextInput
        style={styles.input}
        blurOnSubmit={false}
        value={props.address2}
        onChangeText={props.onChangeAddress2}
      />

      <Text style={styles.label} >
        City
      </Text>
    </View>
  )
}

export default CentreEntry