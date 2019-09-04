import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Styles } from '../constants/Style';
import { Icon } from 'react-native-elements';
import Spacer from './Spacer';


const AttendanceHistoryHeader = (props) => {

  const getDateRangeComponents = () => {
    return props.dateRange.map((date, i) => {
      return (
        <View key={i} style={Styles.attendanceDate} >
          <Text style={Styles.attendanceDateText} >
            { date.substring(0, 2) + '/' + date.substring(3, 5) }
          </Text>
        </View>
      )
    })
  }


  return (
    <View style={Styles.attendanceHeader} >
      <View style={Styles.attendanceControlContainer} >
        <TouchableOpacity
          style={Styles.attendanceDateArrow}
          onPress={() => props.shiftDateRange(-1)}
        >
          <Icon name="chevron-left" size={40} color="white" />
        </TouchableOpacity>

        <Text
          style={Styles.attendanceDateRangeText}
          numberOfLines={1}
        >
          { `${props.dateRange[0]} - ${props.dateRange[6]}` }
        </Text>

        <TouchableOpacity
          style={Styles.attendanceDateArrow}
          onPress={() => props.shiftDateRange(1)}
        >
          <Icon name="chevron-right" size={40} color="white" />
        </TouchableOpacity>
      </View>

      <View style={Styles.attendanceDates} >
        <Spacer width={94} />

        { getDateRangeComponents() }
      </View>
    </View>
  )
}

export default AttendanceHistoryHeader
