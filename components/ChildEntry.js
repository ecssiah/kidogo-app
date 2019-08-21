import React, { useState } from 'react'
import {
  Image, Picker, Text, TextInput, TouchableOpacity, View
} from 'react-native'
import { Styles } from '../constants/Style';
import * as ImagePicker from 'expo-image-picker'
import { Icon } from 'react-native-elements';
import { Gender } from '../constants/Enrollment';


const ChildEntry = (props) => {
  const getHeaderImage = () => {
    if (props.uri) {
      return (
        <Image
          style={Styles.img}
          source={{ uri: props.uri }}
        />
      )
    } else {
      return (
        <Image
          style={Styles.img}
          source={require('../assets/images/child.png')}
        />
      )
    }
  }


  const onChooseCamera = () => {
    // props.navigate('Camera', { setImgURI })
  }


  const onOpenImages = async () => {
    const pic = await ImagePicker.launchImageLibraryAsync()


  }


  return (
    <View>
      <Text style={[Styles.h1, Styles.raleway]} >
        Child
      </Text>

      { getHeaderImage() }

      <View style={{ flexDirection: 'row' }} >
        <TouchableOpacity
          style={{ width: 50,  margin: 10 }}
          onPress={onChooseCamera}
        >
          <Icon name="camera-alt" size={36} color="#ffffff80" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ width: 50, margin: 10 }}
          onPress={onOpenImages}
        >
          <Icon name="photo" size={36} color="#ffffff80" />
        </TouchableOpacity>
      </View>

      <TextInput
        style={Styles.input}
        value={props.firstName}
        onChangeText={props.setFirstName}
      />

      <Text style={Styles.label} >
        Jina ya Kwanza
      </Text>

      <TextInput
        style={Styles.input}
        value={props.lastName}
        onChangeText={props.setLastName}
      />

      <Text style={Styles.label} >
        Ama Familia
      </Text>

      <View style={Styles.nameHolder} >
        <View style={{ flex: .5, marginRight: 5 }} >
          <TextInput
            style={[Styles.input, Styles.dateInput]}
            maxLength={10}
            keyboardType="number-pad"
            value={props.birthdate}
            onChangeText={props.setBirthdate}
          />

          <Text style={Styles.label} >
            Siku ya Kuzaliwa
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
              <Picker.Item label={Gender.FEMALE} value={Gender.FEMALE} />
              <Picker.Item label={Gender.MALE} value={Gender.MALE} />
              <Picker.Item label={Gender.OTHER} value={Gender.OTHER} />
            </Picker>
          </View>

          <Text style={Styles.label} >
            Mvulana au Msichana
          </Text>
        </View>
      </View>

      <TextInput
        style={Styles.textArea}
        multiline={true}
        numberOfLines={4}
        value={props.notes}
        onChangeText={props.setNotes}
      />

      <Text style={Styles.label} >
        Kitu chochote unaweza elezea
      </Text>
    </View>
  )
}

export default ChildEntry
