import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ScrollView, Text, View } from 'react-native'
import Language from '../languages'
import { Styles, Size } from '../constants/Style'

import Spacer from '../components/Spacer'
import Backdrop from '../components/Backdrop'
import PaymentHeader from '../components/PaymentHeader'
import PaymentEntry from '../components/PaymentEntry'
import PaymentHistory from '../components/PaymentHistory'


const Payments = (props) => {
  const { accountId } = props.navigation.state.params


  const accounts = useSelector(state => state.accounts)


  return (
    <Backdrop>
      <Spacer height={Size.statusbar} />

      <ScrollView>
        <PaymentHeader account={accounts[accountId]} />
        <PaymentEntry />
        <PaymentHistory />

        <Spacer height={Size.keyboard} />
      </ScrollView>
    </Backdrop>
  )
}

export default Payments
