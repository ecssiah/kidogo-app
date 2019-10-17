import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import uuid from 'uuid'

import Backdrop from '../components/Backdrop';
import { Size, Styles } from '../constants/Style';
import Spacer from '../components/Spacer';
import AccountFinances from '../components/AccountFinances';
import DisplayMembers from '../components/DisplayMembers';
import { Update, Get, Create, Delete } from '../utilities/localstore';
import Language from '../languages'
import ChildModal from '../components/ChildModal';
import GuardianModal from '../components/GuardianModal';
import ContactModal from '../components/ContactModal';
import { GetShortDate } from '../utilities/dates';
import {
  ACCOUNTS, CHILDREN, ATTENDANCE, GUARDIANS, CONTACTS
} from '../constants/Store';
import { SET_ACCOUNT } from '../constants/Accounts';
import { SET_ATTENDANCE, UPDATE_ATTENDANCE } from '../constants/Attendance';
import { UPDATE_CHILD, SET_CHILD, DELETE_CHILD } from '../constants/Children';
import {
  UPDATE_GUARDIAN, SET_GUARDIAN, DELETE_GUARDIAN
} from '../constants/Guardians';
import {
  UPDATE_CONTACT, SET_CONTACT, DELETE_CONTACT
} from '../constants/Contacts';


const Account = (props) => {
  const { accountId } = props.navigation.state.params

  const dispatch = useDispatch()
  const accounts = useSelector(state => state.accounts)
  const children = useSelector(state => state.children)
  const guardians = useSelector(state => state.guardians)
  const contacts = useSelector(state => state.contacts)

  const [rate, setRate] = useState(accounts[accountId].rate)
  const [frequency, setFrequency] = useState(accounts[accountId].frequency)
  const [selectedChildId, setSelectedChildId] = useState(null)
  const [selectedGuardianId, setSelectedGuardianId] = useState(null)
  const [selectedContactId, setSelectedContactId] = useState(null)
  const [childModalVisible, setChildModalVisible] = useState(false)
  const [guardianModalVisible, setGuardianModalVisible] = useState(false)
  const [contactModalVisible, setContactModalVisible] = useState(false)


  const getAccountName = () => {
    return guardians[accounts[accountId].guardians[0]].lastName
  }


  const getChildren = () => {
    return Object.keys(children).reduce(
      (res, id) => {
        if (accountId === children[id].accountId) {
          res[id] = children[id]
          res[id].id = id
        }
        return res
      }, {}
    )
  }


  const getGuardians = () => {
    return Object.keys(guardians).reduce(
      (res, id) => {
        if (accountId === guardians[id].accountId) {
          res[id] = guardians[id]
          res[id].id = id
        }
        return res
      }, {}
    )
  }


  const getContacts = () => {
    return Object.keys(contacts).reduce(
      (res, id) => {
        if (accountId === contacts[id].accountId) {
          res[id] = contacts[id]
          res[id].id = id
        }
        return res
      }, {}
    )
  }


  const onAddChild = () => {
    setSelectedChildId(null)
    setChildModalVisible(true)
  }


  const onDeleteChild = async (id) => {
    const curAccount = { ...await Get(ACCOUNTS, accountId) }
    const updatedChildren = curAccount.children.filter((childId) =>
      id !== childId
    )

    const updatedAccount = {
      ...curAccount,
      children: updatedChildren,
    }

    dispatch({ type: SET_ACCOUNT, id: accountId, account: updatedAccount })
    await Update(ACCOUNTS, accountId, { children: updatedAccount.children })

    dispatch({ type: DELETE_CHILD, id })
    await Delete(CHILDREN, id)

    setChildModalVisible(false)
  }


  const onUpdateChild = (id) => {
    setSelectedChildId(id)
    setChildModalVisible(true)
  }


  const onSubmitChild = async (id, childData) => {
    if (id) {
      dispatch({ type: UPDATE_CHILD, id, update: childData })
      await Update(CHILDREN, id, childData)
    } else {
      const newChildId = uuid()
      const child = { accountId, ...childData }

      dispatch({ type: SET_CHILD, id: newChildId, child })
      await Create(CHILDREN, newChildId, child)

      const updatedAccount = { ...await Get(ACCOUNTS, accountId) }
      updatedAccount.children.push(newChildId)

      dispatch({ type: SET_ACCOUNT, id: accountId, account: updatedAccount })
      await Update(ACCOUNTS, accountId, { children: updatedAccount.children })

      const today = GetShortDate()
      const update = { [newChildId]: { checkIn: true, checkOut: false }}

      dispatch({ type: UPDATE_ATTENDANCE, id: today, update })
      await Update(ATTENDANCE, today, update)
    }

    setChildModalVisible(false)
  }


  const onAddGuardian = () => {
    setSelectedGuardianId(null)
    setGuardianModalVisible(true)
  }


  const onDeleteGuardian = async (id) => {
    const curAccount = { ...await Get(ACCOUNTS, accountId) }
    const updatedGuardians = curAccount.guardians.filter((guardianId) =>
      guardianId !== id
    )

    const updatedAccount = {
      ...curAccount,
      guardians: updatedGuardians,
    }

    dispatch({ type: SET_ACCOUNT, id: accountId, account: updatedAccount })
    await Update(ACCOUNTS, accountId, updatedAccount.guardians)

    dispatch({ type: DELETE_GUARDIAN, id })
    await Delete(GUARDIANS, id)

    setGuardianModalVisible(false)
  }


  const onUpdateGuardian = (id) => {
    setSelectedGuardianId(id)
    setGuardianModalVisible(true)
  }


  const onSubmitGuardian = async (id, guardianData) => {
    if (id) {
      dispatch({ type: UPDATE_GUARDIAN, id, update: guardianData })
      await Update(GUARDIANS, id, guardianData)
    } else {
      const newGuardianId = uuid()
      const guardian = { accountId, ...guardianData }

      const updatedAccount = { ...await Get(ACCOUNTS, accountId) }
      updatedAccount.guardians.push(newGuardianId)

      dispatch({ type: SET_GUARDIAN, id: newGuardianId, guardian })
      await Create(GUARDIANS, newGuardianId, guardian)

      dispatch({ type: SET_ACCOUNT, id: accountId, account: updatedAccount })
      await Update(ACCOUNTS, accountId, updatedAccount.guardians)
    }

    setGuardianModalVisible(false)
  }


  const onAddContact = () => {
    setSelectedContactId(null)
    setContactModalVisible(true)
  }


  const onDeleteContact = async (id) => {
    const curAccount = { ...await Get(ACCOUNTS, accountId) }
    const updatedContacts = curAccount.contacts.filter((contactId) =>
      contactId !== id
    )

    const updatedAccount = {
      ...curAccount,
      contacts: updatedContacts,
    }

    dispatch({ type: SET_ACCOUNT, id: accountId, account: updatedAccount })
    await Update(ACCOUNTS, accountId, { contacts: updatedAccount.contacts })

    dispatch({ type: DELETE_CONTACT, id })
    await Delete(CONTACTS, id)

    setContactModalVisible(false)
  }


  const onUpdateContact = (id) => {
    setSelectedContactId(id)
    setContactModalVisible(true)
  }


  const onSubmitContact = async (id, contactData) => {
    if (id) {
      dispatch({ type: UPDATE_CONTACT, id, update: contactData })
      await Update(CONTACTS, id, contactData)
    } else {
      const newContactId = uuid()
      const contact = { accountId, ...contactData }

      const updatedAccount = { ...await Get(ACCOUNTS, accountId) }
      updatedAccount.contacts.push(newContactId)

      dispatch({ type: SET_CONTACT, id: newContactId, contact })
      await Create(CONTACTS, newContactId, contact)

      dispatch({ type: SET_ACCOUNT, newContactId, account: updatedAccount })
      await Update(ACCOUNTS, newContactId, { contacts: updatedAccount.contacts })
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
          { getAccountName() }
        </Text>

        <View style={Styles.divider} />

        <AccountFinances
          account={accounts[accountId]}
          rate={rate}
          updateRate={updateRate}
          frequency={frequency}
          updateFrequency={updateFrequency}
        />

        <Spacer medium />

        <View style={Styles.divider} />

        <DisplayMembers
          title={Language.Children}
          addMember={onAddChild}
          updateMember={onUpdateChild}
          members={getChildren()}
        />
        <DisplayMembers
          title={Language.Guardians}
          addMember={onAddGuardian}
          updateMember={onUpdateGuardian}
          members={getGuardians()}
        />
        <DisplayMembers
          title={Language.Contacts}
          addMember={onAddContact}
          updateMember={onUpdateContact}
          members={getContacts()}
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
