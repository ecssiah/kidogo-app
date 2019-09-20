import React from 'react'
import { Text, View } from 'react-native'
import { Styles } from '../constants/Style';

import FinanceHistoryRow from './FinanceHistoryRow';


const FinanceHistory = (props) => {
  const getHistoryRowComponents = () => {
    const rowData = []

    for (const [date, paymentsData] of Object.entries(props.payments)) {
      for (const payment of paymentsData.payments) {
        rowData.push({
          date,
          category: 'payment',
          type: payment.type,
          amount: payment.amount,
        })
      }
    }

    for (const [date, expensesData] of Object.entries(props.expenses)) {
      for (const expense of expensesData.expenses) {
        rowData.push({
          date,
          category: 'expense',
          type: expense.type,
          amount: expense.amount,
        })
      }
    }

    rowData.sort((a, b) => a.date < b.date)

    return rowData.map((data, i) => (
      <FinanceHistoryRow key={i} data={data} />
    ))
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

      { getHistoryRowComponents() }
    </View>
  )
}


export default FinanceHistory
