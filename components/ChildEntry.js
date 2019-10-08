import React, { useState } from 'react'
import {
  Image, Picker, Text, TextInput, TouchableOpacity, View
} from 'react-native'
import { Styles } from '../constants/Style';
import { Gender, Relation, RelationStrings, GenderStrings } from '../constants/Enrollment';
import Language from '../languages';


const ChildEntry = (props) => {
  const onImmunizationChange = (immunization, i) => {
    props.setImmunization(immunization)
  }


  const getGenderItems = () => {
    return Object.values(Gender).map((gender, i) => {
      return (
        <Picker.Item
          key={i}
          label={GenderStrings[gender]}
          value={gender}
        />
      )
    })
  }

  const getRelationItems = () => {
    return Object.values(Relation).map((relation, i) => {
      return (
        <Picker.Item
          key={i}
          label={RelationStrings[relation]}
          value={relation}
        />
      )
    })
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
              { getGenderItems() }
            </Picker>
          </View>

          <Text style={Styles.label} >
            { Language.Gender }
          </Text>
        </View>
      </View>

      <View style={Styles.nameHolder} >
        <View style={{ flex: .5, marginLeft: 5}} >
          <View style={Styles.financePickerContainer} >
            <Picker
              style={Styles.financePicker}
              selectedValue={props.relation}
              onValueChange={(value, pos) => props.setRelation(value)}
            >
              { getRelationItems() }
            </Picker>
          </View>

          <Text style={Styles.label} >
            { Language.Relationship }
          </Text>
        </View>

        <View style={{ flex: .5, marginLeft: 5}} >
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
        </View>
      </View>



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
