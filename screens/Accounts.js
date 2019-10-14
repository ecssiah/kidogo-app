import React from 'react'
import { useSelector } from 'react-redux'
import { ScrollView, Text } from 'react-native'

import Language from '../languages'
import Backdrop from '../components/Backdrop';
import AccountCard from '../components/AccountCard';
import { Styles, Size } from '../constants/Style';
import Spacer from '../components/Spacer';


const Accounts = (props) => {
  const accounts = useSelector(state => state.accounts)


  const getAccountCards = () => {
    return Object.entries(accounts).map(([id, account]) =>
      <AccountCard
        key={id}
        id={id}
        account={account}
        navigate={props.navigation.navigate}
      />
    )
  }


  return (
    <Backdrop>
      <Spacer height={Size.statusbar} />

      <ScrollView style={{ flex: 1 }} >
        <Text style={[Styles.h1, Styles.raleway]} >
          { Language.Families }
        </Text>

        { getAccountCards() }
      </ScrollView>
    </Backdrop>
  )
}

export default Accounts
