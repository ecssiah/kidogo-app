import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import uuid from 'uuid'
import { Icon } from 'react-native-elements';
import { Text, TouchableOpacity, ScrollView, View } from 'react-native'

import Backdrop from '../components/Backdrop';
import ContactEntry from '../components/ContactEntry';
import Spacer from '../components/Spacer';
import Message from '../components/Message';
import { Styles, Colors, Size } from '../constants/Style';
import { SubmitAccount } from '../utilities/localstore';
import { SET_NEW_CONTACT } from '../constants/Enrollment';
import Loading from '../components/Loading';


const Contacts = (props) => {
  const dispatch = useDispatch()
  const newAccount = useSelector(state => state.newAccount)

  const [id, setId] = useState(uuid())
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [soundObject, setSoundObject] = useState(null)
  const [message, setMessage] = useState(null)

  const scrollRef = useRef(null)


  const onSubmitContact = () => {
    const contact = {
      id,
      firstName,
      lastName,
      phone,
    }

    dispatch({ type: SET_NEW_CONTACT, id, contact })

    setMessage("Contact information submitted")
    setTimeout(() => setMessage(null), 2000)
  }


  const onNextContact = async () => {
    onSubmitContact()
    setId(uuid())
    resetForm()
  }


  const onSubmitFamily = async () => {
    setLoading(true)

    await SubmitAccount(dispatch, newAccount)

    setLoading(false)

    props.navigation.navigate('Dash')
  }


  const resetForm = () => {
    scrollRef.current.scrollTo({ x: 0, y: 0, animated: false })

    setFirstName('')
    setLastName('')
    setPhone('')
  }


  const toggleHelpAudio = async () => {
    try {
      if (soundObject) {
        await soundObject.stopAsync()

        setSoundObject(null)
      } else {
        const soundObject = new Audio.Sound()
        await soundObject.loadAsync(require('../assets/audio/contacts.mp3'))
        await soundObject.playAsync()

        setSoundObject(soundObject)
      }
    } catch(error) {
      console.error(error)
    }
  }

  return (
    <Backdrop>
      <Spacer height={Size.statusbar} />

      <Message text={message} />

      {loading
        ? <Loading />
        : <ScrollView ref={scrollRef} >
            <ContactEntry
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              phone={phone}
              setPhone={setPhone}
            />

            <Spacer large />

            <View style={Styles.rowButtons} >
              <TouchableOpacity
                style={Styles.pairButton}
                onPress={onSubmitContact}
              >
                <Text style={Styles.btnText}>Submit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={Styles.pairButton}
                onPress={onNextContact}
              >
                <Text style={Styles.btnText}>Next</Text>
              </TouchableOpacity>
            </View>

            <Spacer medium />

            <TouchableOpacity
              style={Styles.mainButton}
              onPress={onSubmitFamily}
            >
              <Text style={Styles.btnText}>Submit Family</Text>
            </TouchableOpacity>

            <Spacer height={Size.keyboard} />
          </ScrollView>
      }

      <TouchableOpacity
        style={Styles.helpButton}
        onPress={toggleHelpAudio}
      >
        <View style={Styles.helpButtonIcon} >
          <Icon name="record-voice-over" color={Colors.helpButton} size={36} />
        </View>
      </TouchableOpacity>
    </Backdrop>
  )
}

export default Contacts
