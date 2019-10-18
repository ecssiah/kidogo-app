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


const CheckOut = (props) => {
  const dispatch = useDispatch()
  const attendance = useSelector(state => state.attendance)
  const children = useSelector(state => state.children)

  const [checkOutData, setCheckOutData] = useState([])
  const [soundObject, setSoundObject] = useState(null)


  useEffect(() => {
    getCheckOutData()
  }, [])


  const getCheckOutData = async () => {
    const today = GetShortDate()

    const checkOutData = Object.keys(children).map((id) => {
      return {
        id,
        firstName: children[id].firstName,
        lastName: children[id].lastName,
        checkIn: attendance[today][id].checkIn,
        checkOut: attendance[today][id].checkOut,
      }
    })

    setCheckOutData(checkOutData)
  }


  const toggleCheckOut = async (id) => {
    const today = GetShortDate()
    const update = { ...attendance[today] }
    update[id].checkOut = !update[id].checkOut

    dispatch({ type: SET_ATTENDANCE, id: today, attendance: update })
    await Update(ATTENDANCE, today, update)

    getCheckOutData()
  }


  const getAttendanceCards = () => {
    if (!checkOutData) {
      return null
    }

    return (
      checkOutData.map((data, i) =>
        <AttendanceCard
          key={i}
          data={data}
          selected={data.checkOut}
          onPress={() => toggleCheckOut(data.id)}
        />
      )
    )
  }


  const getCurrentCheckedOut = () => {
    return checkOutData.reduce((acc, data) => data.checkOut ? acc + 1 : acc, 0)
  }


  const getCheckedOutTotals = () => {
    const currentCheckOut = getCurrentCheckedOut()

    if (currentCheckOut === checkOutData.length) {
      return 'All children are checked out'
    } else if (currentCheckOut === 0) {
      return 'No children are checked out'
    } else if (currentCheckOut === 1) {
      return '1 child is checked out'
    } else {
      return `${currentCheckOut} children are checked out`
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
        { Language.CheckOut }
      </Text>

      <Text style={Styles.h2}>
        { GetFullDate() }
      </Text>

      <Text style={[Styles.text, { marginLeft: 10, marginBottom: 20 }]} >
        { getCheckedOutTotals() }
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

export default CheckOut
