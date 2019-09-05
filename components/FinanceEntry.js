import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'


const FinanceEntry = (props) => {
  const [addingExpense, setAddingExpense] = useState(false)


  const toggleAddingExpense = () => setAddingExpense(!addingExpense)


  if (addingExpense) {
    <View>

    </View>
  } else {
    return (
      <TouchableOpacity
        style={Styles.button}
        onPress={toggleAddingExpense}
      >
        <Text style={Styles.btnText}>
          New Expense
        </Text>
      </TouchableOpacity>
    )
  }
}


export default FinanceEntry
