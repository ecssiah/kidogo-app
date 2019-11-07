import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Text, TouchableOpacity, View } from 'react-native'
import { Styles } from '../constants/Style';
import Language from '../languages'

import Backdrop from '../components/Backdrop';
import { UploadData } from '../utilities/dbstore';
import Loading from '../components/Loading';


const Upload = (props) => {
  const [loading, setLoading] = useState(false)

  const accounts = useSelector(state => state.accounts)
  const children = useSelector(state => state.children)
  const guardians = useSelector(state => state.guardians)
  const contacts = useSelector(state => state.contacts)
  const finances = useSelector(state => state.finances)
  const payments = useSelector(state => state.payments)
  const expenses = useSelector(state => state.expenses)
  const questions = useSelector(state => state.questions)


  const onUpload = async () => {
    setLoading(true)

    const userData = {
      accounts,
      children,
      guardians,
      contacts,
      finances,
      payments,
      expenses,
      questions,
    }

    await UploadData(userData)

    setLoading(false)
  }


  return (
    <Backdrop>
      { loading
        ? <Loading />
        : <View style={Styles.loading} >
            <TouchableOpacity
              style={Styles.uploadButton}
              onPress={onUpload}
            >
              <Text style={Styles.uploadButtonText}>
                { Language.Upload }
              </Text>
            </TouchableOpacity>
          </View>
      }
    </Backdrop>
  )
}

export default Upload
