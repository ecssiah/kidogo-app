import React from 'react'
import { View, Text, Image } from 'react-native'
import { Styles, Colors } from '../constants/Style';


const AttendanceHistoryRow = (props) => {
  const getColor = (selected) => {
    return selected ? Colors.attendanceSelect : Colors.attendanceEmpty
  }


  const getAttendanceComponents = () => {
    return (
      props.attendance.map((status, i) => {
        return (
          <View key={i} style={Styles.dateStatusHolder} >
            <View
              style={[
                Styles.dateStatus,
                { backgroundColor: getColor(status) }
              ]}
            />
          </View>
        )
      })
    )
  }


  return (
    <View>
      <View style={Styles.attendanceRow} >
        <View style={Styles.attendanceChild} >
          <View style={Styles.attendanceHistoryImageView} >
            <Image
              source={require('../assets/images/child.png')}
              style={Styles.attendanceHistoryImage}
            />
          </View>

          <Text
            numberOfLines={2}
            style={Styles.attendanceName}
          >
            { `${props.firstName}\n${props.lastName}` }
          </Text>
        </View>

        <View style={Styles.attendanceStatusComponents}>
          { getAttendanceComponents() }
        </View>
      </View>
    </View>
  )
}

export default AttendanceHistoryRow
