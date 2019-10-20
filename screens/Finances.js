import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Language from '../languages'

import Backdrop from '../components/Backdrop';
import FinanceHeader from '../components/FinanceHeader';
import Spacer from '../components/Spacer';
import { Size, Styles } from '../constants/Style';
import ExpenseModal from '../components/ExpenseModal';
import PaymentModal from '../components/PaymentModal'
import FinanceHistory from '../components/FinanceHistory';


const Finances = (props) => {
  const [paymentsModalVisible, setPaymentsModalVisible] = useState(false)
  const [expensesModalVisible, setExpensesModalVisible] = useState(false)


  const onAddPayment = () => {
    setPaymentsModalVisible(true)
  }


  const onAddExpense = () => {
    setExpensesModalVisible(true)
  }


  return (
    <Backdrop>
      <Spacer height={Size.statusbar} />

      <FinanceHeader />

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

      <FinanceHistory />

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
