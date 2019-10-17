import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { Styles } from '../constants/Style'


const CurrencyInput = (props) => {
  return (
    <View style={Styles.rowElement} >
      <View style={Styles.rowElements} >
        <Text style={Styles.prefix} >
          K
        </Text>

        <TextInput
          style={Styles.currencyInput}
          keyboardType="number-pad"
          value={props.amount}
          onChangeText={props.setAmount}
        />
      </View>

      <Text style={Styles.label} >
        { props.label }
      </Text>
    </View>
  )
}

export default CurrencyInput
