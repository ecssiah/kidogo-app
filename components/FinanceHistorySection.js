import React from 'react'
import { View } from 'react-native'

import FinanceHistoryRow from './FinanceHistoryRow';


const FinanceHistorySection = (props) => {
  const getHistoryRowComponents = () => {
    return props.expenses.map((expense, i) => {
      return <FinanceHistoryRow key={i} date={props.date} expense={expense} />
    })
  }


  if (!props.expenses) {
    return null
  }


  return (
    <View>
      { getHistoryRowComponents() }
    </View>
  )
}

export default FinanceHistorySection
