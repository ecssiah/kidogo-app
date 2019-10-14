import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Image, Modal, Picker, ScrollView, Text, TextInput, View, TouchableOpacity,
} from 'react-native'
import Language from '../languages'
import { Styles, Size } from '../constants/Style'
import Backdrop from './Backdrop'
import Spacer from './Spacer'
import {
  ExpenseType, ExpenseTypeString, ADD_EXPENSE, UPDATE_EXPENSES
} from '../constants/Finances'
import { Get, Update } from '../utilities/localstore';
import { FINANCES, EXPENSES, PAYMENTS } from '../constants/Store';
import { GetShortDate } from '../utilities/dates'
import uuid from 'uuid'


const ExpenseModal = (props) => {
  const dispatch = useDispatch()

  const [date, setDate] = useState(GetShortDate())
  const [type, setType] = useState(ExpenseType.Rent)
  const [amount, setAmount] = useState('100')


  const getExpenseTypeItems = () => {
    return Object.values(ExpenseType).map((type, i) =>
      <Picker.Item key={i} label={ExpenseTypeString[type]} value={type} />
    )
  }


  const onSubmitExpense = async (expense) => {
    const today = GetShortDate()
    const update = { [uuid()]: { type, amount }}

    dispatch({ type: ADD_EXPENSE, id: today, expense: update })
    await Update(EXPENSES, today, update)

    const expenseAmount = parseFloat(expense.amount)
    const financesToday = await Get(FINANCES, today)

    const financesUpdate = { expenses: financesToday.expenses + expenseAmount }

    dispatch({ type: UPDATE_EXPENSES, id: today, amount: expenseAmount })
    await Update(FINANCES, today, financesUpdate)

    props.setVisible(false)
  }




  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.visible}
      onRequestClose={() => { }}
    >
      <Backdrop>
        <ScrollView>
          <Text style={[Styles.h1, Styles.raleway]} >
            { Language.Expense }
          </Text>

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

          <View style={Styles.nameHolder} >
            <View style={{ flex: .5, marginLeft: 5}} >
              <View style={[Styles.input, { height: 30, paddingLeft: 0 }]} >
                <Picker
                  style={{ color: 'white', marginTop: -10 }}
                  selectedValue={type}
                  onValueChange={(value, pos) => setType(value)}
                >
                  { getExpenseTypeItems() }
                </Picker>
              </View>

              <Text style={Styles.label} >
                { Language.Type}
              </Text>
            </View>

            <View style={{ flex: .5, marginRight: 5 }} >
              <TextInput
                style={Styles.dateInput}
                maxLength={10}
                keyboardType="number-pad"
                value={amount}
                onChangeText={setAmount}
              />

              <Text style={Styles.label} >
                { Language.Amount }
              </Text>
            </View>
          </View>

          <Spacer medium />

          <View style={Styles.rowButtons} >
            <TouchableOpacity
              style={Styles.pairButton}
              onPress={() => props.setVisible(false)}
            >
              <Text style={Styles.btnText} >
                { Language.Cancel }
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={Styles.pairButton}
              onPress={onSubmitExpense}
            >
              <Text style={Styles.btnText} >
                { Language.Confirm }
              </Text>
            </TouchableOpacity>
          </View>

          <Spacer height={Size.keyboard} />
        </ScrollView>
      </Backdrop>
    </Modal>
  )
}

export default ExpenseModal
