import React, { useState } from 'react'
import { Picker, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Styles } from '../constants/Style';
import { GetShortDate } from '../utilities/dates';
import { Memo } from '../constants/Finances';
import Spacer from './Spacer';


const FinanceEntry = (props) => {
  const [date, setDate] = useState(GetShortDate(new Date()))
  const [amount, setAmount] = useState('0')
  const [memo, setMemo] = useState(Memo.RENT)
  const [addingExpense, setAddingExpense] = useState(false)


  const toggleAddingExpense = () => setAddingExpense(!addingExpense)


  const onMemoChange = (memo, i) => {
    setMemo(memo)
  }


  const getMemoItems = () => {
    return Object.values(Memo).map((memo, i) => {
      return <Picker.Item key={i} label={memo} value={memo} />
    })
  }


  if (!addingExpense) {
    return (
      <View>
        <Spacer height={60} />

        <TouchableOpacity
          style={Styles.button}
          onPress={toggleAddingExpense}
        >
          <Text style={Styles.btnText}>
            Add Expense
          </Text>
        </TouchableOpacity>
      </View>
    )
  } else {
    return (
      <View>
        <Text style={Styles.h2}>
          New Expense
        </Text>

        <View style={[Styles.input, { height: 30, paddingLeft: 0 }]} >
          <Picker
            selectedValue={memo}
            style={{ height: 30, color: 'white' }}
            onValueChange={onMemoChange}
          >
            { getMemoItems() }
          </Picker>
        </View>

        <Text style={Styles.label}>
          Type
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
              Amount
            </Text>
          </View>

          <View style={{ flex: 0.5, marginLeft: 5 }} >
            <TextInput
              style={[Styles.input, Styles.dateInput]}
              maxLength={10}
              keyboardType="number-pad"
              value={date}
              onChangeText={setDate}
            />

            <Text style={Styles.label} >
              Date
            </Text>
          </View>
        </View>

        <View style={{ margin: 10, flexDirection: 'row' }} >
          <TouchableOpacity
            style={[Styles.button, { flex: 0.5, marginRight: 5 }]}
            onPress={toggleAddingExpense}
          >
            <Text style={Styles.btnText}>
              Cancel
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.button, { flex: 0.5, marginLeft: 5 }]}
            onPress={() => props.addExpense({memo, amount, date})}
          >
            <Text style={Styles.btnText}>Add Expense</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


export default FinanceEntry
