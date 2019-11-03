import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  View, Text, TextInput, TouchableOpacity
} from 'react-native'
import { Styles, Size } from '../constants/Style';
import {
  SignInCaregiver, ConfirmCaregiver, ResendConfirmCode
} from '../utilities/auth'
import {
  CreateCaregiver, InitDatabase, UpdateStore
} from '../utilities/localstore';
import bcrypt from 'react-native-bcrypt'


import Spacer from '../components/Spacer';
import Backdrop from '../components/Backdrop';
import Language from '../languages'
import Message from '../components/Message';
import Loading from '../components/Loading';
import { CreateDB } from '../utilities/dbstore';
import { CAREGIVER } from '../constants/Store';


const Confirm = (props) => {
  const dispatch = useDispatch()

  const { caregiverData } = props.navigation.state.params

  const [code, setCode] = useState('')
  const [callbackId, setCallbackId] = useState(null)
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)


  const onConfirmAttempt = async () => {
    if (!code) {
      setError("Confirmation code is missing")
      return
    }

    setLoading(true)

    const confirmResult = await ConfirmCaregiver(caregiverData.username, code)

    if (confirmResult === 'SUCCESS') {
      const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(caregiverData.password, 10, (err, hash) => {
          if (err) {
            reject(err)
          }
          resolve(hash)
        })
      })

      try {
        await SignInCaregiver(caregiverData.username, caregiverData.password)

        caregiverData.password = hashedPassword

        await CreateCaregiver(caregiverData)
        await CreateDB(CAREGIVER, caregiverData)
        await InitDatabase(dispatch)
        await UpdateStore(dispatch)

        setLoading(false)

        props.navigation.navigate('Dash')
      } catch (error) {
        const errors = error.errors.map((error) => error.message)
        const errorText = errors.join('\n')

        setError(errorText)
        setLoading(false)
      }
    } else {
      setError(confirmResult.message)
      setLoading(false)
    }
  }


  const onResend = async () => {
    setCode('')
    await ResendConfirmCode(caregiverData.username)
    setError('Confirmation code resent')
  }


  const setError = (text) => {
    clearTimeout(callbackId)
    setMessage(text)
    setCallbackId(setTimeout(() => setMessage(null), 4000))
  }


  return (
    <Backdrop>
      <Spacer height={Size.statusbar} />

      <Message text={message} />

      { loading
        ? <Loading />
        : <View>
            <Text style={Styles.codeMessage} >
              { Language.CodeMessage }
            </Text>

            <Spacer medium />

            <View style={Styles.codeContainer} >
              <TextInput
                style={Styles.codeInput}
                maxLength={6}
                textAlign={'center'}
                keyboardType="number-pad"
                value={code}
                onChangeText={setCode}
              />
            </View>

            <Spacer large />

            <View style={Styles.rowElements}>
              <TouchableOpacity
                style={Styles.rowButton}
                onPress={onResend}
              >
                <Text style={Styles.buttonText}>
                  { Language.Resend }
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={Styles.rowButton}
                onPress={onConfirmAttempt}
              >
                <Text style={Styles.buttonText}>
                  { Language.Confirm }
                </Text>
              </TouchableOpacity>
            </View>
          </View>
      }
    </Backdrop>
  )
}

export default Confirm
