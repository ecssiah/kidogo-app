import React, { useState } from 'react'
import { Image, Modal, Picker, Text, TextInput, View } from 'react-native'
import Language from '../languages'
import { Styles } from '../constants/Style'
import { Gender, GenderStrings } from '../constants/Enrollment'


const ChildModal = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [gender, setGender] = useState('')


  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.visible}
      onRequestClose={() => { }}
    >
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

      <View style={Styles.nameHolder} >
        <View style={{ flex: .5, marginRight: 5 }} >
          <TextInput
            style={Styles.dateInput}
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
              <Picker.Item label="" value={null} />
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
    </Modal>
  )
}

export default ChildModal
