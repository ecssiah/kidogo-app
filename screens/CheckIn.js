import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text, ScrollView, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { Audio } from 'expo-av'
import { GetFullDate, GetShortDate } from '../utilities/dates';
import { Styles, Size } from '../constants/Style';

import Spacer from '../components/Spacer';
import Backdrop from '../components/Backdrop';
import AttendanceCard from '../components/AttendanceCard'
import { ATTENDANCE } from '../constants/Store';
import { Update } from '../utilities/localstore';
import { SET_ATTENDANCE } from '../constants/Attendance'


const CheckIn = (props) => {
  const dispatch = useDispatch()
  const attendance = useSelector(state => state.attendance)
  const children = useSelector(state => state.children)

  const [checkInData, setCheckInData] = useState([])
  const [soundObject, setSoundObject] = useState(null)


  useEffect(() => {
    getCheckInData()
  }, [])


  const getCheckInData = async () => {
    const today = GetShortDate()

    const checkInData = Object.values(children).map((child) => {
      const data = {
        id: child.id,
        firstName: child.firstName,
        lastName: child.lastName,
        checkIn: attendance[today].attendance[child.id].checkIn,
        checkOut: attendance[today].attendance[child.id].checkOut,
      }

      return data
    })

    setCheckInData(checkInData)
  }


  const toggleCheckIn = async (id) => {
    const today = GetShortDate()
    const attendanceToday = { ...attendance[today] }
    attendanceToday.attendance[id].checkIn =
      !attendanceToday.attendance[id].checkIn

    await Update(ATTENDANCE, today, attendanceToday)

    dispatch({ type: SET_ATTENDANCE, id: today, attendance: attendanceToday })

    getCheckInData()
  }


  const getAttendanceCards = () => {
    return (
      checkInData.map((data, i) => {
        return (
          <AttendanceCard
            key={i}
            data={data}
            selected={data.checkIn}
            onPress={() => toggleCheckIn(data.id)}
          />
        )
      })
    )
  }


  const getCurrentAttendance = () => {
    return checkInData.reduce((acc, data) => {
      acc += data.checkIn ? 1 : 0
      return acc
    })
  }


  const getAttendanceTotals = () => {
    const currentAttendance = getCurrentAttendance()

    if (currentAttendance === checkInData.length) {
      return 'All children are checked in'
    } else if (currentAttendance === 0) {
      return 'No children are checked in'
    } else if (currentAttendance === 1) {
      return '1 child is checked in'
    } else {
      return `${currentAttendance} children are checked in`
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
    <Backdrop>
      <Spacer height={Size.statusbar} />

      <Text style={[Styles.h1, Styles.raleway]}>
        Check In
      </Text>

      <Text style={Styles.h2}>
        { GetFullDate() }
      </Text>

      <Text style={[Styles.text, { marginLeft: 10, marginBottom: 20 }]} >
        { checkInData ? getAttendanceTotals() : null }
      </Text>

      <ScrollView contentContainerStyle={Styles.attendanceHolder} >
        { checkInData ? getAttendanceCards() : null }
      </ScrollView>

      <TouchableOpacity
        style={Styles.helpButton}
        onPress={toggleHelpAudio}
      >
        <View style={Styles.helpButtonIcon} >
          <Icon name="record-voice-over" color="#3c233d" size={36} />
        </View>
      </TouchableOpacity>
    </Backdrop>
  )
}

export default CheckIn
