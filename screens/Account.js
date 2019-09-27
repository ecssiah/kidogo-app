import React from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux'

import Backdrop from '../components/Backdrop';
import { Size, Styles } from '../constants/Style';
import Spacer from '../components/Spacer';


const Account = (props) => {
  const { id } = props.navigation.state.params

  const accounts = useSelector(state => state.accounts)
  const children = useSelector(state => state.children)
  const guardians = useSelector(state => state.guardians)
  const contacts = useSelector(state => state.contacts)

  const getFamilyName = () => {
    return guardians[account.guardians[0]].lastName
  }

  return (
    <Backdrop>
      <Spacer height={Size.statusbar} />

      <Text style={[Styles.h1, Styles.raleway]} >
        { getFamilyName() }
      </Text>


    </Backdrop>
  )
}

export default Account
