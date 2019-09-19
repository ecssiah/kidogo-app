import React from 'react'
import { Text, View } from 'react-native'
import { Styles } from '../constants/Style';

import FinanceHistorySection from './FinanceHistorySection';


const FinanceHistory = (props) => {
  const getHistorySectionComponents = () => {
    return props.expenses.map((expensesData, i) => {
      return <FinanceHistorySection
        key={i}
        date={expensesData.date}
        expenses={expensesData.expenses}
      />
    })
  }


  if (!props.expenses) {
    return null
  }


  return (
    <View style={Styles.financeHistoryContainer} >
      <View style={Styles.tableHeader} >
        <Text style={Styles.tableRow} >
          Date
        </Text>

        <Text style={Styles.tableRow} >
          Type
        </Text>

        <Text style={Styles.tableRow} >
          Amount
        </Text>
      </View>

      { getHistorySectionComponents() }
    </View>
  )
}


export default FinanceHistory
