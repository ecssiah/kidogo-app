import React from 'react'
import { useSelector } from 'react-redux'
import { Text, View } from 'react-native'
import { Styles } from '../constants/Style';
import { Icon } from 'react-native-elements';
import Language from '../languages'


const FinanceHeader = (props) => {
  const getFinanceSummary = () => {
    const income = Number(props.financesToday.income)
    const expenses = Number(props.financesToday.expenses)

    if (income > expenses) {
      return `${Language.ThisWeek}: + ${income - expenses}`
    } else {
      return `${Language.ThisWeek}: - ${expenses - income}`
    }
  }


  if (!props.financesToday) {
    return null
  }


  return (
    <View>
      <Text style={Styles.net} >
        { getFinanceSummary() }
      </Text>

      <View style={Styles.dash} >
        <View style={Styles.expenses} >
          <View style={{ flexDirection: 'row' }} >
            <Text style={[Styles.dashText, { color: 'red' }]} >
              K{props.financesToday.expenses}
            </Text>
          </View>
        </View>

        <View style={Styles.expenses} >
          <View style={{ flexDirection: 'row' }} >
            <Text style={[Styles.dashText, { color: 'green' }]} >
              K{props.financesToday.income}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}


export default FinanceHeader
