import React from 'react'
import { Text, View } from 'react-native'
import Language from '../languages'
import { Styles } from '../constants/Style'


const PaymentHistory = (props) => {


  return (
    <View>
      <Text style={Styles.h1} >
        { Language.New } { Language.Payment }
      </Text>

    </View>
  )
}


export default PaymentHistory
