import React from 'react'
import { Text, View } from 'react-native'
import Language from '../languages'

import Backdrop from '../components/Backdrop'
import { Styles, Size } from '../constants/Style'
import Spacer from '../components/Spacer'


const Payments = (props) => {
  return (
    <Backdrop>
      <Spacer height={Size.statusbar} />

      <Text style={Styles.h1} >
        { Language.New } { Language.Payment }
      </Text>
    </Backdrop>
  )
}

export default Payments
