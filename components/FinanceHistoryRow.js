import React from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { Styles, Colors } from '../constants/Style';
import { PaymentMemoIcons, ExpenseMemoIcons } from '../constants/Finances';


const FinanceHistoryRow = (props) => {
  return (
    <View>
      <View style={Styles.financeRow} >
        <Text style={Styles.tableRow} >
          { props.expense.date }
        </Text>

        <Icon
          name={ExpenseMemoIcons[props.expense.memo]}
          size={30}
          type="font-awesome"
          color={Colors.mainText}
        />

        <Text style={Styles.tableRow} >
          { props.expense.memo }
        </Text>

        <Text style={Styles.tableRow} >
          { props.expense.amount }
        </Text>
      </View>

      <View style={{ height: 1, backgroundColor: Colors.mainText }} />
    </View>
  )
}

export default FinanceHistoryRow
