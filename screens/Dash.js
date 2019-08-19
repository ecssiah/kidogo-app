import React, { useEffect, useState } from 'react'
import {
  Image, ImageBackground,
  TouchableHighlight, TouchableOpacity,
  ScrollView, Text, View
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors, Styles } from '../constants/Style';


const Dash = (props) => {
  // const [hour, setHour] = useState(new Date().getHours())
  const [hour, setHour] = useState(4)


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


  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[Colors.gradient_dark, Colors.gradient_light]}
    >
      <ScrollView>
        <TouchableHighlight
          onPress={attendanceTransition}
        >
          <View style={Styles.dash} >
            { getDaytimeImage() }

            <Text style={[Styles.dashFont, Styles.raleway]} >
              { getGreeting() }
            </Text>
          </View>
        </TouchableHighlight>

        <View style={Styles.actionsContainer}>
          <TouchableOpacity
            style={Styles.actionButton}
            onPress={() => props.navigation.navigate('Enrollment')}
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

          <TouchableOpacity
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
        </View>
      </ScrollView>
    </LinearGradient>
  )
}


export default Dash
