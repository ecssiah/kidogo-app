import React from 'react'
import { Text, TouchableOpacity, ImageBackground, View } from 'react-native'
import { Styles, TopMargin } from '../constants/Style';

import Backdrop from '../components/Backdrop';
import Spacer from '../components/Spacer';


const Attendance = (props) => {
  return (
    <Backdrop>
      <Spacer height={TopMargin} />

      <View style={Styles.actionsContainer}>
        <TouchableOpacity
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
          style={Styles.actionButton}
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
