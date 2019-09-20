import React from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { Styles, Colors } from '../constants/Style';
import { PaymentTypeIcons, ExpenseTypeIcons } from '../constants/Finances';


const FinanceHistoryRow = (props) => {
  const getIconName = () => {
    if (props.data.category === 'expense') {
      return ExpenseTypeIcons[props.data.type]
    } else if (props.data.category === 'payment') {
      return PaymentTypeIcons[props.data.type]
    }
  }


  return (
    <View>
      <View style={Styles.financeRow} >
        <Text style={Styles.tableRow} >
          { props.data.date }
        </Text>

        <Icon
          name={getIconName()}
          size={30}
          type="font-awesome"
          color={Colors.mainText}
        />

        <Text style={Styles.tableRow} >
          { props.data.type }
        </Text>

        <Text style={Styles.tableRow} >
          { props.data.amount }
        </Text>
      </View>

      <View style={Styles.divider} />
    </View>
  )
}

export default FinanceHistoryRow
