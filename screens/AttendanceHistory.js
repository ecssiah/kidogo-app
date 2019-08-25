import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

import Backdrop from '../components/Backdrop';
import AttendanceHistoryHeader from '../components/AttendanceHistoryHeader';
import { Get } from '../utilities/localstore';
import { ATTENDANCE } from '../constants/Store';


const AttendanceHistory = (props) => {
  const [historyData, setHistoryData] = useState(null)


  useEffect(() => {
    getHistoryData()
  }, [])


  const getHistoryData = async () => {
    const attendance = await Get(ATTENDANCE)

    console.log(attendance)
  }


  return (
    <Backdrop>

      <AttendanceHistoryHeader />

      <ScrollView>

      </ScrollView>


    </Backdrop>
  )
}

export default AttendanceHistory
