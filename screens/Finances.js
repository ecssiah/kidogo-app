import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Text, TouchableOpacity, View } from 'react-native'
import Language from '../languages'

import Backdrop from '../components/Backdrop';
import FinanceHeader from '../components/FinanceHeader';
import Spacer from '../components/Spacer';
import { Size, Styles } from '../constants/Style';
import { GetShortDateRange } from '../utilities/dates';
import ExpenseModal from '../components/ExpenseModal';
import PaymentModal from '../components/PaymentModal'
import FinanceHistory from '../components/FinanceHistory';


const Finances = (props) => {
  const finances = useSelector(state => state.finances)
  const payments = useSelector(state => state.payments)
  const expenses = useSelector(state => state.expenses)

  const [paymentsModalVisible, setPaymentsModalVisible] = useState(false)
  const [expensesModalVisible, setExpensesModalVisible] = useState(false)


  const getWeekFinances = () => {
    return GetShortDateRange(0, 7).reduce((res, date) => {
      if (date in finances) {
        res.income += finances[date].income
        res.expenses += finances[date].expenses
      }

      return res
    }, { income: 0, expenses: 0 })
  }


  const onAddPayment = () => {
    setPaymentsModalVisible(true)
  }


  const onAddExpense = () => {
    setExpensesModalVisible(true)
  }


  return (
    <Backdrop>
      <Spacer height={Size.statusbar} />

      <FinanceHeader weekFinances={getWeekFinances()} />

      <View style={Styles.buttonContainer} >
        <TouchableOpacity
          style={Styles.button}
          onPress={onAddPayment}
        >
          <Text style={Styles.buttonText} >
            { Language.New } { Language.Payment }
          </Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.buttonContainer} >
        <TouchableOpacity
          style={Styles.button}
          onPress={onAddExpense}
        >
          <Text style={Styles.buttonText} >
            { Language.New } { Language.Expense }
          </Text>
        </TouchableOpacity>
      </View>

      <FinanceHistory
        payments={payments}
        expenses={expenses}
      />

      <PaymentModal
        visible={paymentsModalVisible}
        setVisible={setPaymentsModalVisible}
      />

      <ExpenseModal
        visible={expensesModalVisible}
        setVisible={setExpensesModalVisible }
      />
    </Backdrop>
  )
}

export default Finances
