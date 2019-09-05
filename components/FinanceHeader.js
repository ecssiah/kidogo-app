import React from 'react'
import { Text, View } from 'react-native'
import { Styles } from '../constants/Style';
import { Icon } from 'react-native-elements';


const FinanceHeader = (props) => {

  const getFinanceSummary = () => {
    const income = Number(props.finances.net.income)
    const expenses = Number(props.finances.net.expenses)

    if (income > expenses) {
      return `You earned ${income - expenses} this week.`
    } else {
      return `You lost ${expenses - income} this week.`
    }
  }


  const getSpendingSummary = () => {
    const expenses = Number(props.finances.net.expenses)

    if (expenses > 0) {
      return `You spent ${expenses} this week.`
    } else {
      return `You didn't spend any money this week.`
    }
  }


  const getPaymentSummary = () => {
    const income = Number(props.finances.net.income)

    if (income > 0) {
      return `You were paid ${income} this week.`
    } else {
      return `You weren't paid anything this week.`
    }
  }


  return (
    <View>
      <Text style={Styles.net}>
        { getFinanceSummary() }
      </Text>

      <View style={Styles.dash} >
        <View style={Styles.expenses} >
          <View style={{ flexDirection: 'row' }} >
            <Icon name='arrow-downward' size={24} color='red' />

            <Text style={[Styles.dashText, { color: 'red' }]} >
              `K${props.finances.net.expenses}`
            </Text>
          </View>

          <Text style={Styles.subText} >
            { getSpendingSummary() }
          </Text>
        </View>

        <View style={Styles.expenses} >
          <View style={{ flexDirection: 'row' }} >
            <Icon name='arrow-upward' size={24} color='green' />

            <Text style={[Styles.dashText, { color: 'green' }]} >
              `K${props.finances.net.income}`
            </Text>
          </View>

          <Text style={Styles.subText} >
            { getPaymentSummary() }
          </Text>
        </View>
      </View>
    </View>
  )
}


export default FinanceHeader
