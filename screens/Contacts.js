import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import uuid from 'uuid'
import { Icon } from 'react-native-elements';
import { Text, TouchableOpacity, ScrollView, View } from 'react-native'

import Backdrop from '../components/Backdrop';
import ContactEntry from '../components/ContactEntry';
import Spacer from '../components/Spacer';
import Error from '../components/Error';
import { Styles, Colors, Size } from '../constants/Style';
import { SubmitAccount } from '../utilities/localstore';
import Loading from '../components/Loading';
import { SET_CONTACT } from '../constants/Enrollment';
import { SET_ATTENDANCE } from '../constants/Update';


const Contacts = (props) => {
  const dispatch = useDispatch()
  const newAccount = useSelector(state => state.newAccount)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [soundObject, setSoundObject] = useState(null)

  const scrollRef = useRef(null)


  const onNextContact = async () => {
    setLoading(true)

    const contactData = {
      id: uuid(),
      firstName,
      lastName,
      phone,
    }

    resetForm()

    dispatch({ type: SET_CONTACT, contact: contactData })

    setLoading(false)
  }


  const onSubmitFamily = async () => {
    await SubmitAccount(newAccount)

    dispatch({ type: SET_ATTENDANCE, update: true })

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

      <Error message={error} />

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
                onPress={onNextContact}
              >
                <Text style={Styles.btnText}>Next Contact</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={Styles.pairButton}
                onPress={onSubmitFamily}
              >
                <Text style={Styles.btnText}>Submit Family</Text>
              </TouchableOpacity>
            </View>

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
