import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Styles } from '../constants/Style'


const AccountCard = (props) => {
  const children = useSelector(state => state.children)
  const guardians = useSelector(state => state.guardians)
  const contacts = useSelector(state => state.contacts)


  const getChildNames = () => {
    const childNames = props.account.children.reduce((acc, id) => {
      acc.push(children[id].firstName + ' ' + children[id].lastName)
      return acc
    }, [])

    return childNames.join(', ')
  }


  const getGuardianNames = () => {
    const guardianNames = props.account.guardians.reduce((acc, id) => {
      acc.push(guardians[id].firstName + ' ' + guardians[id].lastName)
      return acc
    }, [])

    return guardianNames.join(', ')
  }


  const getAccountName = () => {
    return guardians[props.account.guardians[0]].lastName
  }


  const onSelect = () => {
    props.navigate('Account', { id: props.account.id })
  }


  return (
    <TouchableOpacity
      style={Styles.accountCard}
      onPress={onSelect}
    >
      <Text style={[Styles.h1, Styles.raleway]}>
        { getAccountName() }
      </Text>

      <Text style={Styles.balance} >
        K{ props.account.balance }
      </Text>

      <View style={Styles.members} >
        <Text style={Styles.childNames} >
          { getChildNames() }
        </Text>

        <Text style={Styles.guardianNames} >
          { getGuardianNames() }
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default AccountCard
