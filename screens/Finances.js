import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView } from 'react-native'

import Backdrop from '../components/Backdrop';
import FinanceHeader from '../components/FinanceHeader';
import FinanceEntry from '../components/FinanceEntry';
import FinanceHistory from '../components/FinanceHistory';
import Spacer from '../components/Spacer';
import { Size } from '../constants/Style';
import { Get, Update } from '../utilities/localstore';
import { FINANCES, EXPENSES, PAYMENTS } from '../constants/Store';
import { GetShortDate } from '../utilities/dates';
import { SET_EXPENSES, SET_PAYMENTS } from '../constants/Finances';


const Finances = (props) => {
  const dispatch = useDispatch()
  const finances = useSelector(state => state.finances)
  const payments = useSelector(state => state.payments)
  const expenses = useSelector(state => state.expenses)


  const getFinancesToday = () => {
    return finances[GetShortDate()]
  }


  const addExpense = async (expense) => {
    const today = GetShortDate()
    const expensesToday = await Get(EXPENSES, today)
    expensesToday.expenses.push(expense)

    await Update(EXPENSES, today, expensesToday)

    dispatch({ type: SET_EXPENSES, id: today, expenses: expensesToday })
  }


  const addPayment = async (payment) => {
    const today = GetShortDate()
    const paymentsToday = await Get(PAYMENTS, today)
    paymentsToday.payments.push(payment)

    await Update(PAYMENTS, today, paymentsToday)

    dispatch({ type: SET_PAYMENTS, id: today, payments: paymentsToday })
  }


  return (
    <Backdrop>
      <Spacer height={Size.statusbar} />

      <ScrollView>
        <FinanceHeader financesToday={getFinancesToday()} />
        <FinanceEntry addPayment={addPayment} addExpense={addExpense} />
        <FinanceHistory payments={payments} expenses={expenses} />

        <Spacer height={Size.statusbar} />
      </ScrollView>
    </Backdrop>
  )
}

export default Finances
