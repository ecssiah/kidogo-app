import React from 'react'
import { Text, TouchableOpacity, ImageBackground, View } from 'react-native'
import { Styles } from '../constants/Style';

import Backdrop from '../components/Backdrop';


const Attendance = (props) => {
  return (
    <Backdrop>
      <TouchableOpacity
        style={[Styles.actionButton, { margin: 10, marginBotom: 0 }]}
        onPress={() => props.navigation.navigate('CheckIn')}
      >
        <ImageBackground
          style={Styles.buttonImage}
          source={require('../assets/images/checkin.png')}
        >
          <Text style={[Styles.actionText, Styles.raleway]}>
            Check In
          </Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        style={[Styles.actionButton, { margin: 10, marginBotom: 0 }]}
        onPress={() => this.props.navigation.navigate('CheckOut')}
      >
        <ImageBackground
          style={Styles.buttonImage}
          source={require('../assets/images/checkout.png')}
        >
          <Text style={[Styles.actionText, Styles.raleway]}>
            Check Out
          </Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        style={[Styles.actionButton, { margin: 10 }]}
        onPress={() => props.navigation.navigate('AttendanceHistory')}
      >
        <ImageBackground
          style={Styles.buttonImage}
          source={require('../assets/HISTORY.png')}
        >
          <Text style={[Styles.actionText, Styles.raleway]}>History</Text>
        </ImageBackground>
      </TouchableOpacity>
    </Backdrop>
  )
}

export default Attendance