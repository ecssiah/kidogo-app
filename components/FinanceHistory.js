import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ScrollView, Text, View } from 'react-native'
import { Styles, Size } from '../constants/Style';
import Language from '../languages'

import Spacer from './Spacer';
import FinanceHistoryRow from './FinanceHistoryRow';


const FinanceHistory = (props) => {
  const payments = useSelector(state => state.payments)
  const expenses = useSelector(state => state.expenses)


  const getHistoryRowComponents = () => {
    const rowData = []

    for (const [date, expensesData] of Object.entries(expenses)) {
      for (const expense of Object.values(expensesData)) {
        rowData.push({
          date,
          type: expense.type,
          amount: `-${expense.amount}`,
        })
      }
    }

    for (const [date, paymentsData] of Object.entries(payments)) {
      for (const payments of Object.values(paymentsData)) {
        rowData.push({
          date,
          type: payments.type,
          amount: payments.amount,
        })
      }
    }

    rowData.sort((a, b) => a.date < b.date)

    return rowData.map((data, i) => (
      <FinanceHistoryRow
        key={i}
        date={data.date}
        type={data.type}
        amount={data.amount}
      />
    ))
  }


  if (!payments || !expenses) {
    return null
  }


  return (
    <View style={Styles.financeHistoryContainer} >
      <View style={Styles.tableHeader} >
        <Text style={Styles.tableRow} >
          { Language.Date }
        </Text>

        <Text style={Styles.tableRow} >
          { Language.Type }
        </Text>

        <Text style={Styles.tableRow} >
          { Language.Amount }
        </Text>
      </View>

      <ScrollView>
        { getHistoryRowComponents() }

        <Spacer height={1.2 * Size.keyboard} />
      </ScrollView>
    </View>
  )
}

export default FinanceHistory
