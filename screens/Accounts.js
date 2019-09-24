import React from 'react'
import { useSelector } from 'react-redux'
import { ScrollView, Text } from 'react-native'

import Backdrop from '../components/Backdrop';
import AccountCard from '../components/AccountCard';


const Accounts = (props) => {
  const accounts = useSelector(state => state.accounts)
  const children = useSelector(state => state.children)
  const guardians = useSelector(state => state.guardians)
  const contacts = useSelector(state => state.contacts)


  const getAccountCards = () => {
    return props.accounts.map((account, i) => {
      return (
        <AccountCard
          key={i}
          id={account.id}
          balance={account.balance}
          name={account.guardians[0].lastName}
          navigate={props.navigation.navigate}
        />
      )
    })
  }


  return (
    <Backdrop>
      <ScrollView style={{ flex: 1 }} >
        <Text style={[Styles.h1, Styles.raleway]} >
          Accounts
        </Text>

        { getAccountCards() }
      </ScrollView>
    </Backdrop>
  )
}

export default Accounts
