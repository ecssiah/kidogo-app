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
    const totals = GetShortDateRange(0, 7).reduce((res, date) => {
      if (date in finances) {
        res.income += finances[date].income
        res.expenses += finances[date].expenses
      }

      return res
    }, { income: 0, expenses: 0 })

    return `${Language.WeekTotal}: ${totals.income - totals.expenses}`
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
