import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Text, View } from 'react-native'
import { Styles } from '../constants/Style';
import { GetShortDateRange } from '../utilities/dates';
import Language from '../languages'


const FinanceHeader = (props) => {
  const finances = useSelector(state => state.finances)

  const [weekFinances, setWeekFinances] = useState()


  useEffect(() => {
    setWeekFinances(getWeekFinances())
  }, [finances])


  const getWeekFinances = () => {
    return GetShortDateRange(0, 7).reduce((res, date) => {
      if (date in finances) {
        res.income += finances[date].income
        res.expenses += finances[date].expenses
      }

      return res
    }, { income: 0, expenses: 0 })
  }


  const getFinanceSummary = () => {
    return (
      `${Language.WeekTotal}: ${weekFinances.income - weekFinances.expenses}`
    )
  }


  if (!weekFinances) {
    return null
  }


  return (
    <View>
      <Text style={Styles.financeHeadline} >
        { getFinanceSummary() }
      </Text>

      <View style={Styles.financeHeader} >
        <View style={{ flexDirection: 'row' }} >
          <Text style={[Styles.financeDisplay, { color: 'green' }]} >
            K{weekFinances.income}
          </Text>

          <Text style={[Styles.financeDisplay, { color: 'red' }]} >
            K{weekFinances.expenses}
          </Text>
        </View>
      </View>
    </View>
  )
}


export default FinanceHeader
