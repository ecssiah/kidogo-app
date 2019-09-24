import React from 'react'
import { useSelector } from 'react-redux'

import Backdrop from '../components/Backdrop';


const Account = (props) => {
  const accounts = useSelector(state => state.accounts)
  const children = useSelector(state => state.children)
  const guardians = useSelector(state => state.guardians)
  const contacts = useSelector(state => state.contacts)

  return (
    <Backdrop>

    </Backdrop>
  )
}

export default Account
