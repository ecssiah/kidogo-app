import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text, TouchableOpacity, View, ScrollView } from 'react-native'
import uuid from 'uuid'
import Language from '../languages'

import Backdrop from '../components/Backdrop';
import FinanceHeader from '../components/FinanceHeader';
import ExpenseEntry from '../components/ExpenseEntry';
import ExpenseHistory from '../components/ExpenseHistory';
import Spacer from '../components/Spacer';
import { Size, Styles } from '../constants/Style';
import { GetShortDate } from '../utilities/dates';
import {
  SET_EXPENSES, SET_FINANCES, ADD_EXPENSE, UPDATE_EXPENSES
} from '../constants/Finances';
import ExpenseModal from '../components/ExpenseModal';


const Finances = (props) => {
  const dispatch = useDispatch()

  const finances = useSelector(state => state.finances)
  const expenses = useSelector(state => state.expenses)

  const [expensesModalVisible, setExpensesModalVisible] = useState(false)


  const getFinancesToday = () => {
    return finances[GetShortDate()]
  }


  const onAddExpense = () => {
    setExpensesModalVisible(true)
  }


  return (
    <Backdrop>
      <Spacer height={Size.statusbar} />

      <ScrollView>
        <FinanceHeader financesToday={getFinancesToday()} />

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

        <ExpenseHistory expenses={expenses} />

        <Spacer height={Size.keyboard} />
      </ScrollView>

      <ExpenseModal
        visible={expensesModalVisible}
        setVisible={setExpensesModalVisible }
      />
    </Backdrop>
  )
}

export default Finances
