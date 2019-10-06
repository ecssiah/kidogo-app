import React from 'react'
import { Text, View } from 'react-native'
import Language from '../languages'
import { Styles } from '../constants/Style'


const PaymentHeader = (props) => {
  return (
    <View>
      <Text style={Styles.h1} >
        { Language.New } { Language.Payment }
      </Text>

      <Text style={Styles.h2} >
        { Language.Balance }: { props.account.balance }
      </Text>
    </View>
  )
}


export default PaymentHeader
