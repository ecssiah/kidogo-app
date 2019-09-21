import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView } from 'react-native'

import Backdrop from '../components/Backdrop';
import FinanceHeader from '../components/FinanceHeader';
import ExpenseEntry from '../components/ExpenseEntry';
import ExpenseHistory from '../components/ExpenseHistory';
import Spacer from '../components/Spacer';
import { Size } from '../constants/Style';
import { Get, Update } from '../utilities/localstore';
import { FINANCES, EXPENSES, PAYMENTS } from '../constants/Store';
import { GetShortDate } from '../utilities/dates';
import { SET_EXPENSES } from '../constants/Finances';


const Finances = (props) => {
  const dispatch = useDispatch()
  const finances = useSelector(state => state.finances)
  const expenses = useSelector(state => state.expenses)


  const getFinancesToday = () => {
    return finances[GetShortDate()]
  }


  const addExpense = async (expense) => {
    const today = GetShortDate()
    const expensesToday = await Get(EXPENSES, today)
    expensesToday.expenses.push(expense)

    await Update(EXPENSES, today, expensesToday)

    const financesToday = await Get(FINANCES, today)
    financesToday.expenses += parseFloat(expense.amount)

    await Update(FINANCES, today, financesToday)

    dispatch({ type: SET_EXPENSES, id: today, expenses: expensesToday })
  }


  return (
    <Backdrop>
      <Spacer height={Size.statusbar} />

      <ScrollView>
        <FinanceHeader financesToday={getFinancesToday()} />
        <ExpenseEntry addExpense={addExpense} />
        <ExpenseHistory expenses={expenses} />

        <Spacer height={Size.keyboard} />
      </ScrollView>
    </Backdrop>
  )
}

export default Finances
