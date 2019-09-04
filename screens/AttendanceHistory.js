import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Get } from '../utilities/localstore';
import { GetShortDate, NextDay, GetDateRange } from '../utilities/dates';
import { ATTENDANCE, CHILDREN } from '../constants/Store';

import Backdrop from '../components/Backdrop';
import AttendanceHistoryHeader from '../components/AttendanceHistoryHeader';
import AttendanceHistoryRow from '../components/AttendanceHistoryRow';


const AttendanceHistory = (props) => {
  const [offset, setOffset] = useState(0)
  const [children, setChildren] = useState(null)
  const [attendance, setAttendance] = useState(null)


  useEffect(() => {
    getAttendanceData()
  }, [])


  const getAttendanceData = async () => {
    setAttendance(await Get(ATTENDANCE))
    setChildren(await Get(CHILDREN))
  }


  const getDateRange = () => {
    return null
  }


  const getChildAttendance = (childId) => {
    const childAttendance = []
    const nextSunday = NextDay(new Date(), 0)

    for (let i = 0; i < 7; i++) {
      const date = GetShortDate(nextSunday, -i)
      const attendanceToday = attendance.find((attendance) =>
        attendance.date === date
      )

      if (attendanceToday) {
        const attended = (
          attendanceToday[childId].attendance.checkIn &&
          attendanceToday[childId].attendance.checkOut
        )
        childAttendance.push(attended)
      } else {
        childAttendance.push(false)
      }
    }

    console.log(childAttendance)
  }


  const getAttendanceRowComponents = () => {
    if (!children) {
      return null
    }

    return children.map((childData, i) =>
      <AttendanceHistoryRow
        key={i}
        uri={childData.uri}
        childId={childData.id}
        firstName={childData.firstName}
        lastName={childData.lastName}
        attendance={getChildAttendance(childData.id)}
      />
    )
  }


  return (
    <Backdrop>
      <ScrollView>
        { getAttendanceRowComponents() }
      </ScrollView>
    </Backdrop>
  )
}

export default AttendanceHistory


      // <AttendanceHistoryHeader
      //   dateRange={getDateRange()}
      // />
