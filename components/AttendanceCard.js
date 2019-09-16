import React from 'react'
import { Icon } from 'react-native-elements'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Styles } from '../constants/Style';


const AttendanceCard = (props) => {
  const getSelectedComponent = () => {
    if (props.selected) {
      return (
        <View style={Styles.present} >
          <Icon name="check-circle" color="white" size={20} />
        </View>
      )
    } else {
      return null
    }
  }


  return (
    <TouchableOpacity
      style={Styles.attendanceCard}
      onPress={props.onPress}
    >
      { getSelectedComponent() }

      <View style={Styles.imgNameHolder} >
        <Image
          style={Styles.attendanceImage}
          source={require('../assets/images/child.png')}
        />
      </View>

      <Text style={Styles.text} >
        {props.data.firstName + '\n' + props.data.lastName}
      </Text>
    </TouchableOpacity>
  )
}

export default AttendanceCard
