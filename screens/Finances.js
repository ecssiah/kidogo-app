import React, { useState } from 'react'
import { ScrollView } from 'react-native'

import Backdrop from '../components/Backdrop';
import FinanceHeader from '../components/FinanceHeader';
import FinanceEntry from '../components/FinanceEntry';
import FinanceHistory from '../components/FinanceHistory';


const Finances = (props) => {
  const [finances, setFinances] = useState({
    net: {
      income: 200,
      expenses: 120,
    }
  })


  const addExpense = (expense) => {

  }


  return (
    <Backdrop>
      <ScrollView>
        <FinanceHeader
          finances={finances}
        />
        <FinanceEntry
          addExpense={addExpense}
        />
        <FinanceHistory
          finances={finances}
        />
      </ScrollView>
    </Backdrop>
  )
}

export default Finances
