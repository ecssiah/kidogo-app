import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

import Backdrop from '../components/Backdrop';
import FinanceHeader from '../components/FinanceHeader';
import FinanceEntry from '../components/FinanceEntry';
import FinanceHistory from '../components/FinanceHistory';
import Spacer from '../components/Spacer';
import { TopMargin } from '../constants/Style';
import { Get } from '../utilities/localstore';
import { FINANCES } from '../constants/Store';
import { GetShortDate } from '../utilities/dates';


const Finances = (props) => {
  const [finances, setFinances] = useState(null)


  useEffect(() => {
    getFinanceData()
  }, [])


  const getFinanceData = async () => {
    const finances = await Get(FINANCES)

    setFinances(finances)
  }


  const getNetData = () => {
    if (finances) {
      const today = GetShortDate()

      const financesToday = finances.find((net) => {
        return net.date === today
      })

      return financesToday
    } else {
      return null
    }
  }


  const addExpense = (expense) => {

  }


  return (
    <Backdrop>
      <Spacer height={TopMargin} />

      <ScrollView>
        <FinanceHeader net={getNetData()} />
        <FinanceEntry addExpense={addExpense} />
        <FinanceHistory finances={finances} />
      </ScrollView>
    </Backdrop>
  )
}

export default Finances
