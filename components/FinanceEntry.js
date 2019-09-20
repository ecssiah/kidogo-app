import React, { useState } from 'react'
import { Picker, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Styles } from '../constants/Style';
import { GetShortDate } from '../utilities/dates';
import { ExpenseType, PaymentType } from '../constants/Finances';
import Spacer from './Spacer';


const FinanceEntry = (props) => {
  const [paymentDate, setPaymentDate] = useState(GetShortDate())
  const [paymentAmount, setPaymentAmount] = useState('0')
  const [paymentType, setPaymentType] = useState(PaymentType.RENT)
  const [addingPayment, setAddingPayment] = useState(false)

  const [expenseDate, setExpenseDate] = useState(GetShortDate())
  const [expenseAmount, setExpenseAmount] = useState('100')
  const [expenseType, setExpenseType] = useState(ExpenseType.PAYMENT)
  const [addingExpense, setAddingExpense] = useState(false)


  const toggleAddingExpense = () => setAddingExpense(!addingExpense)


  const toggleAddingPayment = () => setAddingPayment(!addingPayment)


  const onPaymentTypeChange = (type, i) => setPaymentType(type)


  const onExpenseTypeChange = (type, i) => setExpenseType(type)


  const getExpenseTypeItems = () => {
    return Object.values(ExpenseType).map((type, i) => {
      return <Picker.Item key={i} label={type} value={type} />
    })
  }


  const getPaymentTypeItems = () => {
    return Object.values(PaymentType).map((type, i) => {
      return <Picker.Item key={i} label={type} value={type} />
    })
  }


  const getExpenseComponent = () => {
    if (!addingExpense) {
      return (
        <View style={Styles.financeButtonContainer} >
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
          <Text style={Styles.h2} >
            New Expense
          </Text>

          <View style={[Styles.input, { height: 30, paddingLeft: 0 }]} >
            <Picker
              selectedValue={expenseType}
              style={{ height: 30, color: 'white' }}
              onValueChange={onExpenseTypeChange}
            >
              { getExpenseTypeItems() }
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
                  value={expenseAmount}
                  onChangeText={setExpenseAmount}
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
                value={expenseDate}
                onChangeText={setExpenseDate}
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
              onPress={() => props.addExpense({
                date: expenseDate,
                type: expenseType,
                amount: expenseAmount,
              })}
            >
              <Text style={Styles.btnText}>Add Expense</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }


  const getPaymentComponent = () => {
    if (!addingPayment) {
      return (
        <View style={Styles.financeButtonContainer} >
          <TouchableOpacity
            style={Styles.button}
            onPress={toggleAddingPayment}
          >
            <Text style={Styles.btnText}>
              Add Payment
            </Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View>
          <Text style={Styles.h2} >
            New Payment
          </Text>

          <View style={[Styles.input, { height: 30, paddingLeft: 0 }]} >
            <Picker
              selectedValue={paymentType}
              style={{ height: 30, color: 'white' }}
              onValueChange={onPaymentTypeChange}
            >
              { getPaymentTypeItems() }
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
                  value={paymentAmount}
                  onChangeText={setPaymentAmount}
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
                value={paymentDate}
                onChangeText={setPaymentDate}
              />

              <Text style={Styles.label} >
                Date
              </Text>
            </View>
          </View>

          <View style={{ margin: 10, flexDirection: 'row' }} >
            <TouchableOpacity
              style={Styles.pairButton}
              onPress={toggleAddingPayment}
            >
              <Text style={Styles.btnText} >
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={Styles.pairButton}
              onPress={() => props.addExpense({
                date: paymentDate,
                type: paymentType,
                amount: paymentAmount,
              })}
            >
              <Text style={Styles.btnText}>Add Payment</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }

  return (
    <View>
      { getPaymentComponent() }
      { getExpenseComponent() }
    </View>
  )
}


export default FinanceEntry
