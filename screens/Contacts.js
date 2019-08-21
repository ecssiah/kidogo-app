import React, { useRef, useState } from 'react'
import uuid from 'uuid'
import { Icon } from 'react-native-elements';
import { Text, TouchableOpacity, ScrollView, View } from 'react-native'

import Backdrop from '../components/Backdrop';
import ContactEntry from '../components/ContactEntry';
import Spacer from '../components/Spacer';
import Error from '../components/Error';
import { Styles, TopMargin, Colors } from '../constants/Style';
import { CreateContact } from '../utilities/localstore';
import Loading from '../components/Loading';


const Contacts = (props) => {
  const { accountId } = props.navigation.state.params

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [soundObject, setSoundObject] = useState(null)

  const scrollRef = useRef(null)


  const onNextContact = async () => {
    resetForm()

    setLoading(true)

    const contactData = {
      accountId,
      id: uuid(),
      firstName,
      lastName,
      phone,
    }

    await CreateContact(contactData)

    setLoading(false)
  }


  const onAddChildren = async () => {
    props.navigation.navigate('Children', { accountId })
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
      <Spacer height={TopMargin} />

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
                onPress={onAddChildren}
              >
                <Text style={Styles.btnText}>Add Children</Text>
              </TouchableOpacity>
            </View>

            <Spacer height={320} />
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
