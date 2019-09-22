import React, { useState } from 'react'
import { Picker, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Styles } from '../constants/Style';
import { GetShortDate } from '../utilities/dates';
import { ExpenseType } from '../constants/Finances';
import Language from '../languages'


const ExpenseEntry = (props) => {
  const [date, setDate] = useState(GetShortDate())
  const [amount, setAmount] = useState('100')
  const [type, setType] = useState(ExpenseType.PAYMENT)
  const [entryActive, setEntryActive] = useState(false)


  const onTypeChange = (type, i) => setType(type)


  const getTypeItems = () => {
    return Object.values(ExpenseType).map((expenseType, i) => {
      return <Picker.Item key={i} label={expenseType} value={expenseType} />
    })
  }


  if (!entryActive) {
    return (
      <View style={Styles.financeButtonContainer} >
        <TouchableOpacity
          style={Styles.button}
          onPress={() => setEntryActive(true)}
        >
          <Text style={Styles.btnText}>
            { Language.AddExpense }
          </Text>
        </TouchableOpacity>
      </View>
    )
  } else {
    return (
      <View>
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

        <View style={{ flexDirection: 'row' }} >
          <View style={{ flex: 0.5 }} >
            <View style={{ flexDirection: 'row' }} >
              <Text style={Styles.prefix} >
                K
              </Text>

              <TextInput
                style={[Styles.input, { flex: 0.8, marginLeft: 0 }]}
                keyboardType="number-pad"
                value={amount}
                onChangeText={setAmount}
              />
            </View>

            <Text style={Styles.label} >
              { Language.Amount }
            </Text>
          </View>

          <View style={{ flex: 0.5, marginLeft: 5 }} >
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

        <View style={Styles.rowButtons} >
          <TouchableOpacity
            style={Styles.pairButton}
            onPress={() => setEntryActive(false)}
          >
            <Text style={Styles.btnText}>
              { Language.Cancel }
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.pairButton}
            onPress={() => props.addExpense({ date, type, amount })}
          >
            <Text style={Styles.btnText}>
              { Language.AddExpense }
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


export default ExpenseEntry
