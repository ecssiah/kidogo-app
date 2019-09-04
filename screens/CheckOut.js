import React, { useEffect, useState } from 'react'
import { Text, ScrollView, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { Audio } from 'expo-av'
import { GetFullDate, GetShortDate } from '../utilities/dates';
import { Styles, TopMargin } from '../constants/Style';

import Spacer from '../components/Spacer';
import Backdrop from '../components/Backdrop';
import AttendanceCard from '../components/AttendanceCard'
import { ATTENDANCE, CHILDREN } from '../constants/Store';
import { Get, Create, Update, GetIds } from '../utilities/localstore';


const CheckOut = (props) => {
  const [checkOutData, setCheckOutData] = useState(null)
  const [soundObject, setSoundObject] = useState(null)


  useEffect(() => {
    getCheckOutData()
  }, [])


  const getCheckOutData = async () => {
    const today = GetShortDate()
    const children = await Get(CHILDREN)
    const attendanceIds = await GetIds(ATTENDANCE)
    const attendanceTodayId = attendanceIds.find((date) => date === today)

    let attendanceToday

    if (attendanceTodayId) {
      attendanceToday = await Get(ATTENDANCE, today)
    } else {
      attendanceToday = {
        date: today,
        attendance: {},
      }

      children.forEach((childData) => {
        attendanceToday.attendance[childData.id] = {
          checkIn: true,
          checkOut: false,
        }
      })

      await Create(ATTENDANCE, today, newAttendance)
    }

    const checkOutData = children.map((childData) => {
      const cardData = {
        id: childData.id,
        firstName: childData.firstName,
        lastName: childData.lastName,
        uri: childData.uri,
        checkIn: attendanceToday.attendance[childData.id].checkIn,
        checkOut: attendanceToday.attendance[childData.id].checkOut,
      }

      return cardData
    })

    setCheckOutData(checkOutData)
  }


  const toggleCheckOut = async (id) => {
    const today = GetShortDate()
    const attendanceToday = await Get(ATTENDANCE, today)
    attendanceToday.attendance[id].checkOut = !attendanceToday.attendance[id].checkOut

    await Update(ATTENDANCE, today, attendanceToday)

    getCheckOutData()
  }


  const getAttendanceCards = () => {
    if (!checkOutData) {
      return null
    }

    return (
      checkOutData.map((data, i) => {
        return (
          <AttendanceCard
            key={i}
            data={data}
            selected={data.checkOut}
            onPress={() => toggleCheckOut(data.id)}
          />
        )
      })
    )
  }


  const getCurrentCheckedOut = () => {
    let total = 0

    checkOutData.forEach((data) => {
      if (data.checkOut) {
        total += 1
      }
    })

    return total
  }


  const getCheckedOutTotals = () => {
    const currentAttendance = getCurrentCheckedOut()

    if (currentAttendance === checkOutData.length) {
      return 'All children are checked out'
    } else if (currentAttendance === 1) {
      return '1 child is checked out'
    } else {
      return `${currentAttendance} children are checked out`
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
      <Spacer height={TopMargin} />

      <Text style={[Styles.h1, Styles.raleway]}>
        Check Out
      </Text>

      <Text style={Styles.h2}>
        { GetFullDate() }
      </Text>

      <Text style={[Styles.text, { marginLeft: 10, marginBottom: 20 }]} >
        { checkOutData ? getCheckedOutTotals() : null }
      </Text>

      <ScrollView contentContainerStyle={Styles.attendanceHolder} >
        { checkOutData ? getAttendanceCards() : null }
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

export default CheckOut
