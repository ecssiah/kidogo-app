import React, { useState } from 'react'
import {
  Modal, View, Text, TextInput, TouchableOpacity
} from 'react-native'
import { Styles } from '../constants/Style';

import Spacer from './Spacer';
import Backdrop from './Backdrop';


const ConfirmModal = (props) => {
  const [code, setCode] = useState('')


  const onCodeSubmit = async () => {
    try {
      const codeCache = code
      setCode('')
      await props.onConfirmAttempt(codeCache)
    } catch(error) {
      console.error(error)
    }
  }


  const onResend = async () => {
    console.log("resend code")
  }


  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.visible}
      onRequestClose={() => { }}
    >
      <Backdrop>
        <Text style={Styles.codeMessage} >
          You will receive a text message with a 6-digit code.
          Please enter the code below:
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

        <Spacer medium />

        <View style={{ flexDirection: 'row', margin: 10 }}>
          <TouchableOpacity
            style={[Styles.button, { flex: 0.5, marginRight: 5 }]}
            onPress={onResend}
          >
            <Text style={Styles.btnText}>
              Resend
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.button, { flex: 0.5, marginLeft: 5 }]}
            onPress={onCodeSubmit}
          >
            <Text style={Styles.btnText}>
              Confirm
            </Text>
          </TouchableOpacity>
        </View>

      </Backdrop>
    </Modal>
  )
}

export default ConfirmModal
