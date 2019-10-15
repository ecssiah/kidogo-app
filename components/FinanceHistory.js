import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Styles, Size } from '../constants/Style';
import Language from '../languages'

import Spacer from './Spacer';
import FinanceHistoryRow from './FinanceHistoryRow';


const FinanceHistory = (props) => {
  const getHistoryRowComponents = () => {
    const rowData = []

    for (const [date, expensesData] of Object.entries(props.expenses)) {
      for (const expense of Object.values(expensesData)) {
        rowData.push({
          date,
          type: expense.type,
          amount: `-${expense.amount}`,
        })
      }
    }

    for (const [date, paymentsData] of Object.entries(props.payments)) {
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


  if (!props.payments || !props.expenses) {
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

        <Spacer height={Size.keyboard} />
      </ScrollView>
    </View>
  )
}


export default FinanceHistory
