import React from 'react'
import { Text, TouchableOpacity, ImageBackground, View } from 'react-native'
import { Styles, Size } from '../constants/Style';

import Backdrop from '../components/Backdrop';
import Spacer from '../components/Spacer';


const Attendance = (props) => {
  return (
    <Backdrop>
      <Spacer height={Size.statusbar} />

      <View style={Styles.actionsContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={Styles.actionButton}
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
          activeOpacity={0.8}
          style={Styles.actionButton}
          onPress={() => props.navigation.navigate('CheckOut')}
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
          activeOpacity={0.8}
          style={Styles.actionButton}
          onPress={() => props.navigation.navigate('AttendanceHistory')}
        >
          <ImageBackground
            style={Styles.buttonImage}
            source={require('../assets/images/history.png')}
          >
            <Text style={[Styles.actionText, Styles.raleway]}>History</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </Backdrop>
  )
}

export default Attendance
