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
  const [dateRange, setDateRange] = useState([])
  const [offset, setOffset] = useState(0)
  const [children, setChildren] = useState(null)
  const [attendance, setAttendance] = useState(null)


  useEffect(() => {
    getAttendanceData()
  }, [])


  const getAttendanceData = async () => {
    setDateRange(getDateRange())
    setAttendance(await Get(ATTENDANCE))
    setChildren(await Get(CHILDREN))
  }


  const shiftDateRange = (shift) => {

  }


  const getDateRange = (offset = 0) => {
    const targetSunday = NextDay(new Date(), 0, offset)

    return [-7, -6, -5, -4, -3, -2, -1].map((i) =>
      GetShortDate(targetSunday, i)
    )
  }


  const getChildAttendance = (childId) => {
    return dateRange.map((date) => {
      const dayAttendance = attendance.find((attendance) => {
        return attendance.date === date
      })

      if (dayAttendance) {
        const attended = (
          dayAttendance.attendance[childId].checkIn &&
          dayAttendance.attendance[childId].checkOut
        )
        return attended
      } else {
        return false
      }
    })
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

      <AttendanceHistoryHeader
        dateRange={dateRange}
        shiftDateRange={shiftDateRange}
      />

      <ScrollView>
        { getAttendanceRowComponents() }
      </ScrollView>
    </Backdrop>
  )
}

export default AttendanceHistory


