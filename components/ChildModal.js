import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  Image, Modal, Picker, ScrollView, Text, TextInput, View, TouchableOpacity,
} from 'react-native'
import Language from '../languages'
import { Styles, Size } from '../constants/Style'
import { Gender, GenderStrings } from '../constants/Enrollment'
import Backdrop from './Backdrop'
import Spacer from './Spacer'


const ChildModal = (props) => {
  const children = useSelector(state => state.children)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [gender, setGender] = useState('')


  useEffect(() => {
    if (props.id) {
      setFirstName(children[props.id].firstName)
      setLastName(children[props.id].lastName)
      setBirthdate(children[props.id].birthdate)
      setGender(children[props.id].gender)
    } else {
      setFirstName('')
      setLastName('')
      setBirthdate('')
      setGender('')
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
            { Language.Child }
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

          <View style={Styles.rowElements} >
            <View style={Styles.rowElement} >
              <TextInput
                style={Styles.input}
                maxLength={10}
                keyboardType="number-pad"
                value={birthdate}
                onChangeText={setBirthdate}
              />

              <Text style={Styles.label} >
                { Language.Birthday }
              </Text>
            </View>

            <View style={{ flex: .5, marginLeft: 5}} >
              <View style={[Styles.input, { height: 30, paddingLeft: 0 }]} >
                <Picker
                  style={{ color: 'white', marginTop: -10 }}
                  selectedValue={gender}
                  onValueChange={(value, pos) => setGender(value)}
                >
                  <Picker.Item
                    label={GenderStrings[Gender.Female]} value={Gender.Female}
                  />
                  <Picker.Item
                    label={GenderStrings[Gender.Male]} value={Gender.Male}
                  />
                  <Picker.Item
                    label={GenderStrings[Gender.Other]} value={Gender.Other}
                  />
                </Picker>
              </View>

              <Text style={Styles.label} >
                { Language.Male } { Language.Or } { Language.Female }
              </Text>
            </View>
          </View>

          <Spacer medium />

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
                { firstName, lastName, birthdate, gender }
              )}
            >
              <Text style={Styles.buttonText} >
                { Language.Confirm }
              </Text>
            </TouchableOpacity>
          </View>

          <Spacer medium />

          { getDeleteButton() }

          <Spacer height={Size.keyboard} />
        </ScrollView>
      </Backdrop>
    </Modal>
  )
}

export default ChildModal
