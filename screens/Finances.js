import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text, TouchableOpacity, View, ScrollView } from 'react-native'
import Language from '../languages'

import Backdrop from '../components/Backdrop';
import FinanceHeader from '../components/FinanceHeader';
import Spacer from '../components/Spacer';
import { Size, Styles } from '../constants/Style';
import { GetShortDate } from '../utilities/dates';
import ExpenseModal from '../components/ExpenseModal';
import PaymentModal from '../components/PaymentModal'
import FinanceHistory from '../components/FinanceHistory';


const Finances = (props) => {
  const finances = useSelector(state => state.finances)
  const payments = useSelector(state => state.payments)
  const expenses = useSelector(state => state.expenses)

  const [paymentsModalVisible, setPaymentsModalVisible] = useState(false)
  const [expensesModalVisible, setExpensesModalVisible] = useState(false)


  const getFinancesToday = () => {
    return finances[GetShortDate()]
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

      <FinanceHeader financesToday={getFinancesToday()} />

      <View style={Styles.buttonContainer} >
        <TouchableOpacity
          style={Styles.button}
          onPress={onAddPayment}
        >
          <Text style={Styles.btnText} >
            { Language.New } { Language.Payment }
          </Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.buttonContainer} >
        <TouchableOpacity
          style={Styles.button}
          onPress={onAddExpense}
        >
          <Text style={Styles.btnText} >
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
