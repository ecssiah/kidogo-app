import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

import Backdrop from '../components/Backdrop';
import FinanceHeader from '../components/FinanceHeader';
import FinanceEntry from '../components/FinanceEntry';
import FinanceHistory from '../components/FinanceHistory';
import Spacer from '../components/Spacer';
import { TopMargin } from '../constants/Style';
import { Get, Create, GetIds, Update } from '../utilities/localstore';
import { FINANCES, EXPENSES } from '../constants/Store';
import { GetShortDate } from '../utilities/dates';


const Finances = (props) => {
  const [finances, setFinances] = useState(null)
  const [expenses, setExpenses] = useState(null)


  useEffect(() => {
    getFinanceData()
  }, [])


  const getFinanceData = async () => {
    setFinances(await Get(FINANCES))
    setExpenses(await Get(EXPENSES))
  }


  const getNetData = () => {
    if (finances) {
      const today = GetShortDate()
      return finances.find((net) => net.date === today)
    } else {
      return null
    }
  }


  const addExpense = async (expense) => {
    const today = GetShortDate()
    const expensesToday = await Get(EXPENSES, today)
    expensesToday.expenses.push(expense)

    Update(EXPENSES, today, expensesToday)
  }


  return (
    <Backdrop>
      <Spacer height={TopMargin} />

      <ScrollView>
        <FinanceHeader net={getNetData()} />
        <FinanceEntry addExpense={addExpense} />
        <FinanceHistory expenses={expenses} />

        <Spacer height={320} />
      </ScrollView>
    </Backdrop>
  )
}

export default Finances
