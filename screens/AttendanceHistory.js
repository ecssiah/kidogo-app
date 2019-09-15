import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView } from 'react-native'
import { Get } from '../utilities/localstore';
import { GetShortDate, NextDay, GetDateRange } from '../utilities/dates';
import { ATTENDANCE, CHILDREN } from '../constants/Store';

import Backdrop from '../components/Backdrop';
import AttendanceHistoryHeader from '../components/AttendanceHistoryHeader';
import AttendanceHistoryRow from '../components/AttendanceHistoryRow';
import { Size } from '../constants/Style';
import Spacer from '../components/Spacer';
import { Day } from '../constants/Attendance';


const AttendanceHistory = (props) => {
  const dispatch = useDispatch()
  const children = useSelector(state => state.children)
  const attendance = useSelector(state => state.attendance)

  const [dateRange, setDateRange] = useState([])
  const [offset, setOffset] = useState(0)


  useEffect(() => {
    setDateRange(getDateRange())
  }, [])


  useEffect(() => {
    setDateRange(getDateRange())
  }, [offset])


  const shiftDateRange = (shift) => {
    setOffset(offset + shift)
  }


  const getDateRange = () => {
    const targetSunday = NextDay(new Date(), Day.SUNDAY, offset)

    return [-6, -5, -4, -3, -2, -1, 0].map((i) =>
      GetShortDate(targetSunday, i)
    )
  }


  const getChildAttendance = (childId) => {
    return dateRange.map((date) => {
      if (date in attendance) {
        const attended = (
          attendance[date]["attendance"][childId].checkIn &&
          attendance[date]["attendance"][childId].checkOut
        )
        return attended
      } else {
        return false
      }
    })
  }


  const getAttendanceRowComponents = () => {
    const rowComponents = []

    for (let [id, child] of Object.entries(children)) {
      rowComponents.push(
        <AttendanceHistoryRow
          key={id}
          childId={id}
          firstName={child.firstName}
          lastName={child.lastName}
          attendance={getChildAttendance(id)}
        />
      )
    }

    return rowComponents
  }


  return (
    <Backdrop>
      <Spacer height={Size.statusbar} />

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
