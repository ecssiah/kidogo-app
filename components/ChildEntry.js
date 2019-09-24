import React, { useState } from 'react'
import {
  Image, Picker, Text, TextInput, TouchableOpacity, View
} from 'react-native'
import { Styles } from '../constants/Style';
import { Gender } from '../constants/Enrollment';
import Language from '../languages';


const ChildEntry = (props) => {
  const onImmunizationChange = (immunization, i) => {
    props.setImmunization(immunization)
  }


  return (
    <View>
      <Text style={[Styles.h1, Styles.raleway]} >
        { Language.Child }
      </Text>

      <Image
        style={Styles.img}
        source={require('../assets/images/child.png')}
      />

      <TextInput
        style={Styles.input}
        value={props.firstName}
        onChangeText={props.setFirstName}
      />

      <Text style={Styles.label} >
        { Language.FirstName }
      </Text>

      <TextInput
        style={Styles.input}
        value={props.lastName}
        onChangeText={props.setLastName}
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
            value={props.birthdate}
            onChangeText={props.setBirthdate}
          />

          <Text style={Styles.label} >
            { Language.Birthday }
          </Text>
        </View>

        <View style={{ flex: .5, marginLeft: 5}} >
          <View style={[Styles.input, { height: 30, paddingLeft: 0 }]} >
            <Picker
              style={{ color: 'white', marginTop: -10 }}
              selectedValue={props.gender}
              onValueChange={(value, pos) => props.setGender(value)}
            >
              <Picker.Item label="" value={null} />
              <Picker.Item label={Gender.Female} value={Gender.Female} />
              <Picker.Item label={Gender.Male} value={Gender.Male} />
              <Picker.Item label={Gender.Other} value={Gender.Other} />
            </Picker>
          </View>

          <Text style={Styles.label} >
            { Language.Male } { Language.Or } { Language.Female }
          </Text>
        </View>
      </View>

      <TextInput
        style={Styles.input}
        value={props.immunization}
        onChangeText={props.setImmunization}
      />

      <View style={Styles.financePickerContainer} >
        <Picker
          selectedValue={props.immunization}
          style={Styles.financePicker}
          onValueChange={onImmunizationChange}
        >
          <Picker.Item label={Language.True} value={true} />
          <Picker.Item label={Language.False} value={false} />
        </Picker>
      </View>

      <Text style={Styles.label} >
        { Language.Immunization }
      </Text>


      <TextInput
        style={Styles.textArea}
        multiline={true}
        numberOfLines={4}
        value={props.note}
        onChangeText={props.setNote}
      />

      <Text style={Styles.label} >
        { Language.Notes }
      </Text>
    </View>
  )
}

export default ChildEntry
