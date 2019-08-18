import React, { useState } from 'react'
import {
  Image, Picker, Text, TextInput, TouchableOpacity, ScrollView, View
} from 'react-native'
import { Styles } from '../constants/Style';
import * as ImagePicker from 'expo-image-picker'
import { Icon } from 'react-native-elements';


const ChildEntry = (props) => {
  const [imgURI, setImgURI] = useState(null)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [gender, setGender] = useState('')
  const [notes, setNotes] = useState('')


  const getHeaderImage = () => {
    if (imgURI) {
      return (
        <Image
          style={Styles.img}
          source={{ uri: imgURI }}
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
    props.navigate('Camera', { setImgURI })
  }


  const onOpenImages = async () => {
    const pic = await ImagePicker.launchImageLibraryAsync()

    setImgURI(pic.uri)
  }


  return (
    <View>
      <Text style={[Styles.h1, Styles.raleway]} >
        Child Details
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
        value={firstName}
        onChangeText={setFirstName}
      />

      <Text style={Styles.label} >
        Jina ya Kwanza
      </Text>

      <TextInput
        style={Styles.input}
        value={lastName}
        onChangeText={setLastName}
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
            value={birthdate}
            onChangeText={setBirthdate}
          />

          <Text style={Styles.label} >
            Siku ya Kuzaliwa
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
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </View>

          <Text style={Styles.label} >
            Mvulana au Msichana
          </Text>
        </View>
      </View>

      <TextInput
        style={Styles.input}
        multiline={true}
        value={notes}
        onChangeText={setNotes}
      />

      <Text style={Styles.label} >
        Kitu chochote unaweza elezea
      </Text>
    </View>
  )
}

export default ChildEntry
