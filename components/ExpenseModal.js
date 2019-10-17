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
  ADD_EXPENSE, UPDATE_EXPENSES, FinanceType, FinanceTypeNames, ExpenseType
} from '../constants/Finances'
import { Get, Update } from '../utilities/localstore';
import { FINANCES, EXPENSES, PAYMENTS } from '../constants/Store';
import { GetShortDate } from '../utilities/dates'
import uuid from 'uuid'


const ExpenseModal = (props) => {
  const dispatch = useDispatch()

  const [date, setDate] = useState(GetShortDate())
  const [type, setType] = useState(FinanceType.Rent)
  const [amount, setAmount] = useState('100')


  const getExpenseTypeItems = () => {
    return Object.values(ExpenseType).map((type, i) =>
      <Picker.Item key={i} label={FinanceTypeNames[type]} value={type} />
    )
  }


  const onSubmitExpense = async () => {
    const expense = { type, amount }
    const update = { [uuid()]: expense }

    dispatch({ type: ADD_EXPENSE, id: date, expense: update })
    await Update(EXPENSES, date, update)

    const expenseAmount = parseFloat(expense.amount)
    const finances = await Get(FINANCES)

    const financesUpdate = {
      expenses: parseFloat(finances[date].expenses) + expenseAmount
    }

    dispatch({ type: UPDATE_EXPENSES, id: date, amount: expenseAmount })
    await Update(FINANCES, date, financesUpdate)

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

          <View style={Styles.rowElements} >
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

            <View style={Styles.rowElement} >
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

          <View style={Styles.rowElements} >
            <TouchableOpacity
              style={Styles.rowButton}
              onPress={() => props.setVisible(false)}
            >
              <Text style={Styles.buttonText} >
                { Language.Cancel }
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={Styles.rowButton}
              onPress={onSubmitExpense}
            >
              <Text style={Styles.buttonText} >
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

