import React, { useState } from 'react'
import { Text, ScrollView, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { Audio } from 'expo-av'
import { LinearGradient } from 'expo-linear-gradient'
import { GetFullDate } from '../utilities/dates';
import { UpdateAttendance } from '../utilities/localstore';
import { Colors, Styles, TopMargin } from '../constants/Style';
import { CHECKIN } from '../constants/Attendance';

import AttendanceCard from '../components/AttendanceCard'
import Spacer from '../components/Spacer';


const CheckIn = (props) => {
  const [soundObject, setSoundObject] = useState(null)


  const getAttendanceCards = () => {
    return null

    // if (!attendanceToday) {
    //   return null
    // }

    // return (
    //   Object.keys(attendanceToday).map((id, i) => {
    //     let cardDetails = attendanceToday[id]

    //     return (
    //       <AttendanceCard
    //         key={i}
    //         isMorning={true}
    //         { ...cardDetails }
    //         onPress={() => UpdateAttendance(CHECKIN, id)}
    //       />
    //     )
    //   })
    // )
  }


  const childrenHere = () => {
    return {
      "total": 23,
      "hereToday": 6,
    }
  }


  const getAttendance = () => {
    const childrenResp = childrenHere()

    if (childrenResp.total === childrenResp.hereToday) {
      return 'All children are here'
    } else if (childrenResp.hereToday === 1) {
      return '1 child is here'
    } else {
      return `${childrenResp.hereToday} children are here`
    }
  }


  const toggleHelpAudio = async () => {
    try {
      if (soundObject) {
        await soundObject.stopAsync()

        setSoundObject(null)
      } else {
        const soundObject = new Audio.Sound()
        await soundObject.loadAsync(require('../assets/audio/attendance.mp3'))
        await soundObject.playAsync()

        setSoundObject(soundObject)
      }
    } catch(error) {
      console.error(error)
    }
  }


  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[Colors.gradient_dark, Colors.gradient_light]}
    >
      <Spacer height={TopMargin} />

      <Text style={[Styles.h1, Styles.raleway]}>
        Check In
      </Text>

      <Text style={Styles.h2}>
        { GetFullDate() }
      </Text>

      <Text style={[Styles.text, { marginLeft: 10, marginBottom: 20 }]} >
        { getAttendance() }
      </Text>

      <ScrollView contentContainerStyle={Styles.attendanceHolder} >
        { getAttendanceCards() }
      </ScrollView>

      <TouchableOpacity
        style={Styles.helpButton}
        onPress={toggleHelpAudio}
      >
        <View style={Styles.helpButtonIcon} >
          <Icon name="record-voice-over" color="#3c233d" size={36} />
        </View>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default CheckIn