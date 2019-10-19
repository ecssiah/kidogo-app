import React from 'react'
import { Text, View } from 'react-native'
import { Styles } from '../constants/Style';
import Language from '../languages'


const FinanceHeader = (props) => {
  const getFinanceSummary = () => {
    return (
      `${Language.WeekTotal}: ` +
      `${props.weekFinances.income - props.weekFinances.expenses}`
    )
  }


  return (
    <View>
      <Text style={Styles.financeHeadline} >
        { getFinanceSummary() }
      </Text>

      <View style={Styles.financeHeader} >
        <View style={{ flexDirection: 'row' }} >
          <Text style={[Styles.financeDisplay, { color: 'green' }]} >
            K{props.weekFinances.income}
          </Text>

          <Text style={[Styles.financeDisplay, { color: 'red' }]} >
            K{props.weekFinances.expenses}
          </Text>
        </View>
      </View>
    </View>
  )
}


export default FinanceHeader
