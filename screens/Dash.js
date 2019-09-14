import React, { useState } from 'react'
import {
  Image, ImageBackground,
  TouchableHighlight, TouchableOpacity,
  ScrollView, Text, View
} from 'react-native'
import { Styles } from '../constants/Style';
import Backdrop from '../components/Backdrop';


const Dash = (props) => {
  const [hour, setHour] = useState(new Date().getHours())


  const getGreeting = () => {
    if (hour < 12) {
      return "Nani hako Leo?"
    } else if (hour < 17) {
      return "Kuna aliyetoka?"
    } else {
      return "Uli nunua kitu chochote leo?"
    }
  }


  const attendanceTransition = () => {
    if (hour < 12) {
      props.navigation.navigate('CheckIn')
    } else if (hour < 17) {
      props.navigation.navigate('CheckOut')
    } else {
      props.navigation.navigate('Finances')
    }
  }


  const getDaytimeImage = () => {
    if (hour < 12) {
      return <Image source={require('../assets/images/morning.png')} />
    } else if (hour < 17) {
      return <Image source={require('../assets/images/afternoon.png')} />
    } else {
      return <Image source={require('../assets/images/evening.png')} />
    }
  }


  const onPressEnrollment = () => {
    props.navigation.navigate('Enrollment')
  }


  return (
    <Backdrop>
      <ScrollView>
        <TouchableHighlight
          activeOpacity={0.8}
          onPress={attendanceTransition}
        >
          <View style={Styles.dash} >
            { getDaytimeImage() }

            <Text style={[Styles.dashFont, Styles.raleway]} >
              { getGreeting() }
            </Text>
          </View>
        </TouchableHighlight>

        <View style={Styles.actionsContainer} >
          <TouchableOpacity
            activeOpacity={0.8}
            style={Styles.actionButton}
            onPress={() => props.navigation.navigate('Attendance')}
          >
            <ImageBackground
              style={Styles.buttonImage}
              source={require('../assets/images/attendance.png')}
            >
              <Text style={[Styles.actionText, Styles.raleway]} >
                Attendance
              </Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={Styles.actionButton}
            onPress={()=> props.navigation.navigate('Finances')}
          >
            <ImageBackground
              style={Styles.buttonImage}
              source={require('../assets/images/finances.png')}
            >
              <Text style={[Styles.actionText, Styles.raleway]} >
                Finances
              </Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={Styles.actionButton}
            onPress={() => props.navigation.navigate('Questions')}
          >
            <ImageBackground
              source={require('../assets/images/questions.png')}
              style={Styles.buttonImage}
            >
              <Text style={[Styles.actionText, Styles.raleway]} >
                Daily Questions
              </Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={Styles.actionButton}
            onPress={onPressEnrollment}
          >
            <ImageBackground
              style={Styles.buttonImage}
              source={require('../assets/images/enrollment.png')}
            >
              <Text style={[Styles.actionText, Styles.raleway]} >
                Add a family
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Backdrop>
  )
}


export default Dash
