import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView, Text, View } from 'react-native'

import Backdrop from '../components/Backdrop';
import { Size, Styles } from '../constants/Style';
import Spacer from '../components/Spacer';
import AccountFinances from '../components/AccountFinances';
import DisplayMembers from '../components/DisplayMembers';
import { Update } from '../utilities/localstore';
import { ACCOUNTS } from '../constants/Store';
import { SET_ACCOUNT } from '../constants/Account';
import Language from '../languages'
import ChildModal from '../components/ChildModal';
import GuardianModal from '../components/GuardianModal';
import ContactModal from '../components/ContactModal';


const Account = (props) => {
  const { id } = props.navigation.state.params

  const dispatch = useDispatch()

  const accounts = useSelector(state => state.accounts)
  const children = useSelector(state => state.children)
  const guardians = useSelector(state => state.guardians)
  const contacts = useSelector(state => state.contacts)

  const [selectedChildId, setSelectedChildId] = useState(null)
  const [selectedGuardianId, setSelectedGuardianId] = useState(null)
  const [selectedContactId, setSelectedContactId] = useState(null)
  const [childModalVisible, setChildModalVisible] = useState(false)
  const [guardianModalVisible, setGuardianModalVisible] = useState(false)
  const [contactModalVisible, setContactModalVisible] = useState(false)
  const [rate, setRate] = useState(accounts[id].rate)
  const [frequency, setFrequency] = useState(accounts[id].frequency)


  const getFamilyName = () => {
    return guardians[accounts[id].guardians[0]].lastName
  }


  const onAddChild = () => {
    setSelectedChildId(null)
    setChildModalVisible(true)
  }


  const onUpdateChild = (id) => {
    setSelectedChildId(id)
    setChildModalVisible(true)
  }


  const onSubmitChild = (child) => {
    console.log(child)
  }


  const onAddGuardian = () => {
    setSelectedGuardianId(null)
    setGuardianModalVisible(true)

  }


  const onUpdateGuardian = (id) => {
    setSelectedGuardianId(id)
    setGuardianModalVisible(true)
  }


  const onSubmitGuardian = (guardian) => {
    console.log(guardian)
  }


  const onAddContact = () => {
    setSelectedContactId(null)
    setContactModalVisible(true)
  }


  const onUpdateContact = (id) => {
    setSelectedContactId(id)
    setContactModalVisible(true)
  }


  const onSubmitContact = (contact) => {
    console.log(contact)
  }


  const updateRate = async (rate) => {
    setRate(rate)
    await Update(ACCOUNTS, id, { rate })

    const updatedAccount = {
      ...accounts[id],
      rate,
    }

    dispatch({ type: SET_ACCOUNT, id, account: updatedAccount })
  }


  const updateFrequency = async (frequency) => {
    setFrequency(frequency)
    await Update(ACCOUNTS, id, { frequency })

    const updatedAccount = {
      ...accounts[id],
      frequency,
    }

    dispatch({ type: SET_ACCOUNT, id, account: updatedAccount })
  }


  return (
    <Backdrop>
      <Spacer height={Size.statusbar} />

      <ScrollView>
        <Text style={[Styles.h1, Styles.raleway]} >
          { getFamilyName() }
        </Text>

        <View style={Styles.divider} />

        <AccountFinances
          account={accounts[id]}
          navigate={props.navigation.navigate}
          rate={rate}
          updateRate={updateRate}
          frequency={frequency}
          updateFrequency={updateFrequency}
        />

        <View style={Styles.divider} />

        <DisplayMembers
          title={Language.Children}
          addMember={onAddChild}
          updateMember={onUpdateChild}
          members={children}
        />
        <DisplayMembers
          title={Language.Guardians}
          addMember={onAddGuardian}
          updateMember={onUpdateGuardian}
          members={guardians}
        />
        <DisplayMembers
          title={Language.Contacts}
          addMember={onAddContact}
          updateMember={onUpdateContact}
          members={contacts}
        />

        <Spacer height={Size.keyboard} />
      </ScrollView>

      <ChildModal
        id={selectedChildId}
        visible={childModalVisible}
        setVisible={setChildModalVisible}
        submit={onSubmitChild}
      />

      <GuardianModal
        id={selectedGuardianId}
        visible={guardianModalVisible}
        setVisible={setGuardianModalVisible}
        submit={onSubmitGuardian}
      />

      <ContactModal
        id={selectedContactId}
        visible={contactModalVisible}
        setVisible={setContactModalVisible}
        submit={onSubmitContact}
      />
    </Backdrop>
  )
}

export default Account
