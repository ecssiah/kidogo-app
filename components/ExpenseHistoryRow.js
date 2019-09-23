import React from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { Styles, Colors } from '../constants/Style';
import { ExpenseTypeIcons, ExpenseTypeString } from '../constants/Finances';
import Spacer from './Spacer';

const ExpenseHistoryRow = (props) => {
  return (
    <View>
      <View style={Styles.financeRow} >
        <Text style={Styles.tableRow} >
          { props.date }
        </Text>

        <Icon
          size={30}
          iconStyle={Styles.financeIcon}
          type="font-awesome"
          color={Colors.mainText}
          name={ExpenseTypeIcons[props.type]}
        />

        <Text style={Styles.tableRow} >
          { ExpenseTypeString[props.type] }
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
