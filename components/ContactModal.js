import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View
} from 'react-native'
import Language from '../languages'
import { Styles, Size } from '../constants/Style'
import Spacer from './Spacer'

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


  const getDeleteButton = () => {
    if (props.id) {
      return (
        <TouchableOpacity
          style={Styles.mainButton}
          onPress={() => props.delete(props.id)}
        >
          <Text style={Styles.buttonText} >
            { Language.Delete }
          </Text>
        </TouchableOpacity>
      )
    } else {
      return null
    }
  }


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

          <View style={Styles.rowElements} >
            <TouchableOpacity
              style={Styles.rowButton}
              onPress={() => props.setVisible(false)}
            >
              <Text style={Styles.buttonText} >
                { Language.Cancel }
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={Styles.rowButton}
              onPress={() => props.submit(
                props.id,
                { firstName, lastName, phone }
              )}
            >
              <Text style={Styles.buttonText} >
                { Language.Confirm }
              </Text>
            </TouchableOpacity>
          </View>

          { getDeleteButton() }

          <Spacer height={Size.keyboard} />
        </ScrollView>
      </Backdrop>
    </Modal>
  )
}

export default ContactModal
