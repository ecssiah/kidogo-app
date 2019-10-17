import React from 'react'
import { useSelector } from 'react-redux'
import { Text, View } from 'react-native'
import { Styles } from '../constants/Style';
import { Icon } from 'react-native-elements';
import { GetShortDateRange } from '../utilities/dates';
import Language from '../languages'


const FinanceHeader = (props) => {
  const finances = useSelector(state => state.finances)


  const getFinanceSummary = () => {
    const results = GetShortDateRange(0, 7).reduce((result, date) => {
      if (date in finances) {
        result.income += finances[date].income
        result.expenses += finances[date].expenses
      }

      return result
    }, { income: 0, expenses: 0 })

    if (results.income === results.expenses) {
      return `${Language.WeekTotal}: K0`
    } else if (results.income > results.expenses) {
      return `${Language.WeekTotal}: + K${results.income - results.expenses}`
    } else {
      return `${Language.WeekTotal}: - K${results.expenses - results.income}`
    }
  }


  return (
    <View>
      <Text style={Styles.financeHeadline} >
        { getFinanceSummary() }
      </Text>

      <View style={Styles.financeHeader} >
        <View style={{ flexDirection: 'row' }} >
          <Text style={[Styles.financeDisplay, { color: 'green' }]} >
            K{props.financesToday.income}
          </Text>

          <Text style={[Styles.financeDisplay, { color: 'red' }]} >
            K{props.financesToday.expenses}
          </Text>
        </View>
      </View>
    </View>
  )
}


export default FinanceHeader
