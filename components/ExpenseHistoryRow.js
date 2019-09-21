import React from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { Styles, Colors } from '../constants/Style';
import { ExpenseTypeIcons } from '../constants/Finances';

const ExpenseHistoryRow = (props) => {
  return (
    <View>
      <View style={Styles.financeRow} >
        <Text style={Styles.tableRow} >
          { props.date }
        </Text>

        <Icon
          size={30}
          type="font-awesome"
          color={Colors.mainText}
          name={ExpenseTypeIcons[props.type]}
        />

        <Text style={Styles.tableRow} >
          { props.type }
        </Text>

        <Text style={Styles.tableRow} >
          { props.amount }
        </Text>
      </View>

      <View style={Styles.divider} />
    </View>
  )
}

export default ExpenseHistoryRow
