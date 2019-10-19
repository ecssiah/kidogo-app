import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  DatePickerAndroid, Modal, Picker, ScrollView, Text,
  TextInput, View, TouchableOpacity,
} from 'react-native'
import Language from '../languages'
import { Styles, Size } from '../constants/Style'
import Backdrop from './Backdrop'
import Spacer from './Spacer'
import {
  ADD_PAYMENT, UPDATE_INCOME,
  FinanceType, FinanceTypeNames, PaymentType,
} from '../constants/Finances'
import { Update, Get, InitPayments, InitFinances } from '../utilities/localstore'
import { PAYMENTS, FINANCES } from '../constants/Store'
import { GetShortDate } from '../utilities/dates'
import uuid from 'uuid'


const PaymentModal = (props) => {
  const dispatch = useDispatch()
  const accounts = useSelector(state => state.accounts)
  const guardians = useSelector(state => state.guardians)

  const [accountId, setAccountId] = useState(Object.keys[0])
  const [date, setDate] = useState(new Date())
  const [type, setType] = useState(FinanceType.MPesa)
  const [amount, setAmount] = useState('100')


  const getPaymentTypeItems = () => {
    return Object.values(PaymentType).map((type, i) =>
      <Picker.Item key={i} label={FinanceTypeNames[type]} value={type} />
    )
  }


  const getFamilyItems = () => {
    return Object.entries(accounts).map(([id, account]) =>
      <Picker.Item
        key={id}
        label={guardians[account.guardians[0]].lastName}
        value={id}
      />
    )
  }


  const onSubmitPayment = async () => {
    const shortDate = GetShortDate(0, date)
    const payment = { accountId, type, amount }
    const update = { [uuid()]: payment }

    await InitPayments(dispatch, shortDate)
    await InitFinances(dispatch, shortDate)

    dispatch({ type: ADD_PAYMENT, id: shortDate, payment: update })
    await Update(PAYMENTS, shortDate, update)

    const finances = await Get(FINANCES)
    const paymentAmount = parseFloat(payment.amount)
    const financesUpdate = {
      income: parseFloat(finances[shortDate].income) + paymentAmount
    }

    dispatch({ type: UPDATE_INCOME, id: shortDate, amount: paymentAmount })
    await Update(FINANCES, shortDate, financesUpdate)

    props.setVisible(false)
  }


  const onDateSelection = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date(),
      })

      if (action === DatePickerAndroid.dateSetAction) {
        setDate(new Date(year, month, day))
      }
    } catch ({ code, message }) {
      console.warn(' Cannot open date picker', message)
    }
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
            { Language.Payment }
          </Text>

          <View style={Styles.rowElements} >
            <View style={Styles.rowElement} >
              <View style={[Styles.input, { height: 30, paddingLeft: 0 }]} >
                <Picker
                  style={{ color: 'white', marginTop: -10 }}
                  selectedValue={accountId}
                  onValueChange={(value, pos) => setAccountId(value)}
                >
                  { getFamilyItems() }
                </Picker>
              </View>

              <Text style={Styles.label} >
                { Language.Family }
              </Text>
            </View>

            <View style={Styles.rowElement} >
              <TouchableOpacity
                onPress={onDateSelection}
              >
                <Text style={Styles.dateInput} >
                  { GetShortDate(0, date) }
                </Text>
              </TouchableOpacity>

              <Text style={Styles.label} >
                { Language.Date }
              </Text>
            </View>
          </View>

          <View style={Styles.rowElements} >
            <View style={Styles.rowElement} >
              <View style={[Styles.input, { height: 30, paddingLeft: 0 }]} >
                <Picker
                  style={{ color: 'white', marginTop: -10 }}
                  selectedValue={type}
                  onValueChange={(value, pos) => setType(value)}
                >
                  { getPaymentTypeItems() }
                </Picker>
              </View>

              <Text style={Styles.label} >
                { Language.Type}
              </Text>
            </View>

            <View style={Styles.rowElement} >
              <TextInput
                style={Styles.input}
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
              onPress={onSubmitPayment}
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

export default PaymentModal

