import React from 'react'
import { useSelector } from 'react-redux'
import { Text } from 'react-native'

import Backdrop from '../components/Backdrop';


const Accounts = (props) => {
  const accounts = useSelector(state => state.accounts)
  const children = useSelector(state => state.children)
  const guardians = useSelector(state => state.guardians)
  const contacts = useSelector(state => state.contacts)

  return (
    <Backdrop>

    </Backdrop>
  )
}

export default Accounts
