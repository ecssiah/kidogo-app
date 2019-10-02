import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Backdrop from '../components/Backdrop';
import { Size, Styles } from '../constants/Style';
import Spacer from '../components/Spacer';
import AccountFinances from '../components/AccountFinances';
import DisplayMembers from '../components/DisplayMembers';
import { Update, Get, GetIds, Create } from '../utilities/localstore';
import { ACCOUNTS, CHILDREN } from '../constants/Store';
import { SET_ACCOUNT } from '../constants/Account';
import Language from '../languages'
import ChildModal from '../components/ChildModal';
import GuardianModal from '../components/GuardianModal';
import ContactModal from '../components/ContactModal';
import { SET_CHILD } from '../constants/Children';


const Account = (props) => {
  const { accountId } = props.navigation.state.params

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
  const [rate, setRate] = useState(accounts[accountId].rate)
  const [frequency, setFrequency] = useState(accounts[accountId].frequency)


  const getFamilyName = () => {
    return guardians[accounts[accountId].guardians[0]].lastName
  }


  const onAddChild = () => {
    setSelectedChildId(null)
    setChildModalVisible(true)
  }


  const onUpdateChild = (id) => {
    setSelectedChildId(id)
    setChildModalVisible(true)
  }


  const onSubmitChild = async (child) => {
    const childIds = await GetIds(CHILDREN)

    if (childIds.find(id => id === child.id)) {
      const curAccount = await Get(ACCOUNTS, accountId)
      const updatedAccount = { ...curAccount }
      updatedAccount.children.push(child.id)

      await Update(ACCOUNTS, accountId, { children: updatedAccount.children })
      await Update(CHILDREN, child)

      const modAccount = await Get(ACCOUNTS, accountId)
      const modChildren = await Get(CHILDREN, GetIds(CHILDREN))

      console.log("Modified Items:")
      console.log(modAccount)
      console.log(modChildren)

      dispatch({ type: SET_ACCOUNT, id: accountId, account: updatedAccount })
      dispatch({ type: SET_CHILD, id: child.id, child })
    } else {
      await Create(CHILDREN, child.id, { accountId, ...child })

      dispatch({ type: SET_CHILD, id: child.id, child })
    }
  }


  const onAddGuardian = () => {
    setSelectedGuardianId(null)
    setGuardianModalVisible(true)
  }


  const onUpdateGuardian = (id) => {
    setSelectedGuardianId(id)
    setGuardianModalVisible(true)
  }


  const onSubmitGuardian = async (guardian) => {
    const curAccount = await Get(ACCOUNTS, accountId)
    const updatedAccount = { ...curAccount }
    updatedAccount.guardians.push(guardian)

    await Update(ACCOUNTS, accountId, { guardians: updatedAccount.guardians })

    dispatch({ type: SET_ACCOUNT, id: accountId, account: updatedAccount })
  }


  const onAddContact = () => {
    setSelectedContactId(null)
    setContactModalVisible(true)
  }


  const onUpdateContact = (id) => {
    setSelectedContactId(id)
    setContactModalVisible(true)
  }


  const onSubmitContact = async (contact) => {
    const curAccount = await Get(ACCOUNTS, accountId)
    const updatedAccount = { ...curAccount }
    updatedAccount.contacts.push(contact)

    await Update(ACCOUNTS, accountId, { contacts: updatedAccount.contacts })

    dispatch({ type: SET_ACCOUNT, id: accountId, account: updatedAccount })
  }


  const updateRate = async (rate) => {
    setRate(rate)
    await Update(ACCOUNTS, accountId, { rate })

    const updatedAccount = {
      ...accounts[accountId],
      rate,
    }

    dispatch({ type: SET_ACCOUNT, id: accountId, account: updatedAccount })
  }


  const updateFrequency = async (frequency) => {
    setFrequency(frequency)
    await Update(ACCOUNTS, accountId, { frequency })

    const updatedAccount = {
      ...accounts[accountId],
      frequency,
    }

    dispatch({ type: SET_ACCOUNT, id: accountId, account: updatedAccount })
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
          account={accounts[accountId]}
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
