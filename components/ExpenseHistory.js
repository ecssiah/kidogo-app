import React from 'react'
import { Text, View } from 'react-native'
import { Styles } from '../constants/Style';
import Language from '../languages'

import ExpenseHistoryRow from './ExpenseHistoryRow';


const ExpenseHistory = (props) => {
  const getHistoryRowComponents = () => {
    const rowData = []

    for (const [date, expensesData] of Object.entries(props.expenses)) {
      for (const expense of expensesData.expenses) {
        rowData.push({
          date,
          type: expense.type,
          amount: expense.amount,
        })
      }
    }

    rowData.sort((a, b) => a.date < b.date)

    return rowData.map((data, i) => (
      <ExpenseHistoryRow
        key={i}
        date={data.date}
        type={data.type}
        amount={data.amount}
      />
    ))
  }


  if (!props.expenses) {
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

      { getHistoryRowComponents() }
    </View>
  )
}


export default ExpenseHistory
