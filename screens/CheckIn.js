import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text, ScrollView, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { Audio } from 'expo-av'
import { GetFullDate, GetShortDate } from '../utilities/dates';
import { Styles, Size } from '../constants/Style';
import Language from '../languages'

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

    const checkInData = Object.keys(children).map((id) => {
      return {
        id,
        firstName: children[id].firstName,
        lastName: children[id].lastName,
        checkIn: attendance[today][id].checkIn,
        checkOut: attendance[today][id].checkOut,
      }
    })

    setCheckInData(checkInData)
  }


  const toggleCheckIn = async (id) => {
    const today = GetShortDate()
    const update = { ...attendance[today] }
    update[id].checkIn = !update[id].checkIn

    dispatch({ type: SET_ATTENDANCE, id: today, attendance: update })
    await Update(ATTENDANCE, today, update)

    getCheckInData()
  }


  const getAttendanceCards = () => {
    if (!checkInData) {
      return null
    }

    return (
      checkInData.map((data, i) =>
        <AttendanceCard
          key={i}
          data={data}
          selected={data.checkIn}
          onPress={() => toggleCheckIn(data.id)}
        />
      )
    )
  }


  const getCurrentCheckIn = () => {
    return checkInData.reduce((acc, data) => data.checkIn ? acc + 1 : acc, 0)
  }


  const getAttendanceTotals = () => {
    const currentCheckIn = getCurrentCheckIn()

    if (!checkInData) {
      return null
    } else if (currentCheckIn === checkInData.length) {
      return 'All children are checked in'
    } else if (currentCheckIn === 0) {
      return 'No children are checked in'
    } else if (currentCheckIn === 1) {
      return '1 child is checked in'
    } else {
      return `${currentCheckIn} children are checked in`
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
        { Language.CheckIn }
      </Text>

      <Text style={Styles.h2}>
        { GetFullDate() }
      </Text>

      <Text style={[Styles.text, { marginLeft: 10, marginBottom: 20 }]} >
        { getAttendanceTotals() }
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
    </Backdrop>
  )
}

export default CheckIn
