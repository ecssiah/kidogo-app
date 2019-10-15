import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Image, Modal, Picker, ScrollView, Text, TextInput, View, TouchableOpacity,
} from 'react-native'
import Language from '../languages'
import { Styles, Size } from '../constants/Style'
import Backdrop from './Backdrop'
import Spacer from './Spacer'
import { ADD_PAYMENT, FinanceType, FinanceTypeNames, PaymentType } from '../constants/Finances'
import { Update, Get } from '../utilities/localstore'
import { PAYMENTS } from '../constants/Store'
import { GetShortDate } from '../utilities/dates'
import uuid from 'uuid'


const PaymentModal = (props) => {
  const dispatch = useDispatch()
  const accounts = useSelector(state => state.accounts)
  const guardians = useSelector(state => state.guardians)

  const [accountId, setAccountId] = useState(null)
  const [date, setDate] = useState(GetShortDate())
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
    const update = { [uuid()]: { accountId, type, amount } }

    dispatch({ type: ADD_PAYMENT, id: date, payment: update })
    await Update(PAYMENTS, date, update)

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
            { Language.Payment }
          </Text>

          <View style={Styles.nameHolder} >
            <View style={{ flex: .5, marginLeft: 5}} >
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

            <View style={{ flex: .5, marginLeft: 5}} >
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

          <View style={Styles.nameHolder} >
            <View style={{ flex: .5, marginLeft: 5}} >
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
              onPress={onSubmitPayment}
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

export default PaymentModal

