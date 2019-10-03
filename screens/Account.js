import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import uuid from 'uuid'

import Backdrop from '../components/Backdrop';
import { Size, Styles } from '../constants/Style';
import Spacer from '../components/Spacer';
import AccountFinances from '../components/AccountFinances';
import DisplayMembers from '../components/DisplayMembers';
import { Update, Get, GetIds, Create } from '../utilities/localstore';
import { ACCOUNTS, CHILDREN, ATTENDANCE, GUARDIANS, CONTACTS } from '../constants/Store';
import { SET_ACCOUNT } from '../constants/Account';
import Language from '../languages'
import ChildModal from '../components/ChildModal';
import GuardianModal from '../components/GuardianModal';
import ContactModal from '../components/ContactModal';
import { SET_CHILD, UPDATE_CHILD } from '../constants/Children';
import { GetShortDate } from '../utilities/dates';
import { SET_ATTENDANCE } from '../constants/Attendance';
import { UPDATE_GUARDIAN, SET_GUARDIAN } from '../constants/Guardians';
import { UPDATE_CONTACT, SET_CONTACT } from '../constants/Contacts';


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


  const onDeleteChild = (id) => {
    console.log("Delete not implemented!")
    console.log(id)
  }


  const onUpdateChild = (id) => {
    setSelectedChildId(id)
    setChildModalVisible(true)
  }


  const onSubmitChild = async (childData) => {
    if (childData.id) {
      dispatch({ type: UPDATE_CHILD, id: childData.id, update: childData })
      await Update(CHILDREN, childData.id, childData)

    } else {
      const child = { accountId, ...childData }
      child.id = uuid()

      const updatedAccount = { ...await Get(ACCOUNTS, accountId) }
      updatedAccount.children.push(child.id)

      dispatch({ type: SET_CHILD, id: child.id, child })
      await Create(CHILDREN, child.id, child)

      dispatch({ type: SET_ACCOUNT, id: accountId, account: updatedAccount })
      await Update(ACCOUNTS, accountId, { children: updatedAccount.children })

      const today = GetShortDate()
      const attendanceToday = await Get(ATTENDANCE, today)
      attendanceToday.attendance[child.id] = { checkIn: true, checkOut: false }

      dispatch({ type: SET_ATTENDANCE, id: today, attendance: attendanceToday })
      await Update(ATTENDANCE, today, { attendance: attendanceToday.attendance })
    }

    setChildModalVisible(false)
  }


  const onAddGuardian = () => {
    setSelectedGuardianId(null)
    setGuardianModalVisible(true)
  }


  const onDeleteGuardian = (id) => {
    console.log("Delete not implemented!")
    console.log(id)
  }


  const onUpdateGuardian = (id) => {
    setSelectedGuardianId(id)
    setGuardianModalVisible(true)
  }


  const onSubmitGuardian = async (guardianData) => {
    if (guardianData.id) {
      dispatch({ type: UPDATE_GUARDIAN, id: guardianData.id, update: guardianData })
      await Update(GUARDIANS, guardianData.id, guardianData)

    } else {
      const guardian = { accountId, ...guardianData }
      guardian.id = uuid()

      const updatedAccount = { ...await Get(ACCOUNTS, accountId) }
      updatedAccount.guardians.push(guardian.id)

      dispatch({ type: SET_GUARDIAN, id: guardian.id, guardian })
      await Create(GUARDIANS, guardian.id, guardian)

      dispatch({ type: SET_ACCOUNT, id: accountId, account: updatedAccount })
      await Update(ACCOUNTS, accountId, { guardians: updatedAccount.guardians })
    }

    setGuardianModalVisible(false)
  }


  const onAddContact = () => {
    setSelectedContactId(null)
    setContactModalVisible(true)
  }


  const onDeleteContact = (id) => {
    console.log("Delete not implemented!")
    console.log(id)
  }


  const onUpdateContact = (id) => {
    setSelectedContactId(id)
    setContactModalVisible(true)
  }


  const onSubmitContact = async (contactData) => {
    if (contactData.id) {
      dispatch({ type: UPDATE_CONTACT, id: contactData.id, update: contactData })
      await Update(CONTACTS, contactData.id, contactData)

    } else {
      const contact = { accountId, ...contactData }
      contact.id = uuid()

      const updatedAccount = { ...await Get(ACCOUNTS, accountId) }
      updatedAccount.contacts.push(contact.id)

      dispatch({ type: SET_CONTACT, id: contact.id, contact })
      await Create(CONTACTS, contact.id, contact)

      dispatch({ type: SET_ACCOUNT, id: accountId, account: updatedAccount })
      await Update(ACCOUNTS, accountId, { contacts: updatedAccount.contacts })
    }

    setContactModalVisible(false)
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
        delete={onDeleteChild}
      />

      <GuardianModal
        id={selectedGuardianId}
        visible={guardianModalVisible}
        setVisible={setGuardianModalVisible}
        submit={onSubmitGuardian}
        delete={onDeleteGuardian}
      />

      <ContactModal
        id={selectedContactId}
        visible={contactModalVisible}
        setVisible={setContactModalVisible}
        submit={onSubmitContact}
        delete={onDeleteContact}
      />
    </Backdrop>
  )
}

export default Account
