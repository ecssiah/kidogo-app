import React, { useState } from 'react'
import {
  Modal, View, Text, TextInput, TouchableOpacity
} from 'react-native'
import { Styles } from '../constants/Style';

import Spacer from './Spacer';
import Backdrop from './Backdrop';
import Language from '../languages'


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

        <Spacer medium />

        <View style={{ flexDirection: 'row', margin: 10 }}>
          <TouchableOpacity
            style={[Styles.button, { flex: 0.5, marginRight: 5 }]}
            onPress={onResend}
          >
            <Text style={Styles.buttonText}>
              { Language.Resend }
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.button, Styles.rowElement]}
            onPress={onCodeSubmit}
          >
            <Text style={Styles.buttonText}>
              { Language.Confirm }
            </Text>
          </TouchableOpacity>
        </View>
      </Backdrop>
    </Modal>
  )
}

export default ConfirmModal
