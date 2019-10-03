import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View
} from 'react-native'
import Language from '../languages'
import { Styles, Size } from '../constants/Style'
import Spacer from './Spacer'
import uuid from 'uuid'

import Backdrop from '../components/Backdrop'


const ContactModal = (props) => {
  const contacts = useSelector(state => state.contacts)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')


  useEffect(() => {
    if (props.id) {
      setFirstName(contacts[props.id].firstName)
      setLastName(contacts[props.id].lastName)
      setPhone(contacts[props.id].phone)
    } else {
      setFirstName('')
      setLastName('')
      setPhone('')
    }
  }, [props.id])


  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.visible}
      onRequestClose={() => { }}
    >
      <Backdrop>
        <ScrollView>
          <Text style={[Styles.h1, Styles.raleway]} >
            { Language.Contact }
          </Text>

          <Image
            style={Styles.img}
            source={require('../assets/images/child.png')}
          />

          <TextInput
            style={Styles.input}
            value={firstName}
            onChangeText={setFirstName}
          />

          <Text style={Styles.label} >
            { Language.FirstName }
          </Text>

          <TextInput
            style={Styles.input}
            value={lastName}
            onChangeText={setLastName}
          />

          <Text style={Styles.label} >
            { Language.LastName }
          </Text>

          <TextInput
            style={Styles.input}
            value={phone}
            onChangeText={setPhone}
          />

          <Text style={Styles.label} >
            { Language.Phone }
          </Text>

          <View style={Styles.rowButtons} >
            <TouchableOpacity
              style={Styles.pairButton}
              onPress={() => props.setVisible(false)}
            >
              <Text style={Styles.btnText} >
                { Language.Cancel }
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={Styles.pairButton}
              onPress={() => props.submit({
                firstName, lastName, phone,
              })}
            >
              <Text style={Styles.btnText} >
                { Language.Confirm }
              </Text>
            </TouchableOpacity>
          </View>

          <Spacer height={Size.keyboard} />
        </ScrollView>
      </Backdrop>
    </Modal>
  )
}

export default ContactModal
