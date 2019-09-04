import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Get } from '../utilities/localstore';
import { GetShortDate, NextDay, GetDateRange } from '../utilities/dates';
import { ATTENDANCE, CHILDREN } from '../constants/Store';

import Backdrop from '../components/Backdrop';
import AttendanceHistoryHeader from '../components/AttendanceHistoryHeader';
import AttendanceHistoryRow from '../components/AttendanceHistoryRow';
import { TopMargin } from '../constants/Style';
import Spacer from '../components/Spacer';


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
      const shortDate = GetShortDate(nextSunday, -i)
      const dayAttendance = attendance.find((attendance) => {
        return attendance.date === shortDate
      })

      if (dayAttendance) {
        const attended = (
          dayAttendance.attendance[childId].checkIn &&
          dayAttendance.attendance[childId].checkOut
        )
        childAttendance.push(attended)
      } else {
        childAttendance.push(false)
      }
    }

    return childAttendance
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
      <Spacer height={TopMargin} />

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
