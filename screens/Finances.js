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


const Finances = (props) => {
  const [finances, setFinances] = useState(null)


  useEffect(() => {
    getFinanceData()
  }, [])


  const getFinanceData = async () => {
    setFinances(await Get(FINANCES))
  }


  const addExpense = (expense) => {

  }


  return (
    <Backdrop>
      <Spacer height={TopMargin} />

      <ScrollView>
        <FinanceHeader finances={finances} />
        <FinanceEntry addExpense={addExpense} />
        <FinanceHistory finances={finances} />
      </ScrollView>
    </Backdrop>
  )
}

export default Finances
