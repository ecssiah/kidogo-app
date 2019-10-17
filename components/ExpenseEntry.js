import React, { useState } from 'react'
import { Picker, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Styles } from '../constants/Style';
import { GetShortDate } from '../utilities/dates';
import { FinanceType, FinanceTypeNames } from '../constants/Finances';
import Language from '../languages'


const ExpenseEntry = (props) => {
  const [date, setDate] = useState(GetShortDate())
  const [amount, setAmount] = useState('100')
  const [type, setType] = useState(FinanceType.Rent)
  const [entryActive, setEntryActive] = useState(false)


  const onTypeChange = (type, i) => setType(type)


  const getTypeItems = () => {
    return Object.values(FinanceType).map((expenseType, i) => {
      return <Picker.Item
        key={i}
        label={FinanceTypeNames[expenseType]}
        value={expenseType}
      />
    })
  }


  if (!entryActive) {
    return (
      <View style={Styles.financeButtonContainer} >
        <TouchableOpacity
          style={Styles.button}
          onPress={() => setEntryActive(true)}
        >
          <Text style={Styles.buttonText}>
            { Language.AddExpense }
          </Text>
        </TouchableOpacity>
      </View>
    )
  } else {
    return (
      <View>
        <Text style={[Styles.h2, { textDecorationLine: 'underline' }]} >
          { Language.AddExpense }
        </Text>

        <View style={Styles.financePickerContainer} >
          <Picker
            selectedValue={type}
            style={Styles.financePicker}
            onValueChange={onTypeChange}
          >
            { getTypeItems() }
          </Picker>
        </View>

        <Text style={Styles.label}>
          { Language.Type }
        </Text>

        <View style={Styles.rowElements} >
          <CurrencyInput
            label={Language.Amount}
            amount={amount}
            setAmount={setAmount}
          />

          <View style={Styles.rowElement} >
            <TextInput
              style={Styles.dateInput}
              maxLength={10}
              keyboardType="number-pad"
              value={date}
              onChangeText={setDate}
            />

            <Text style={Styles.label} >
              { Language.Date }
            </Text>
          </View>
        </View>

        <View style={Styles.rowElements} >
          <TouchableOpacity
            style={Styles.rowButton}
            onPress={() => setEntryActive(false)}
          >
            <Text style={Styles.buttonText} >
              { Language.Cancel }
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.rowButton}
            onPress={() => props.addExpense({ date, type, amount })}
          >
            <Text style={Styles.buttonText} >
              { Language.Submit }
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


export default ExpenseEntry
