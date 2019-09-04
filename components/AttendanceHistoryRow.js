import React from 'react'
import { View, Text, Image } from 'react-native'
import { Styles, Colors } from '../constants/Style';


const AttendanceHistoryRow = (props) => {
  const getChildImg = () => {
    if (props.uri) {
      return (
        <View style={Styles.attendanceHistoryImageView} >
          <Image
            source={{ uri: props.uri }}
            style={Styles.attendanceHistoryImage}
          />
        </View>
      )
    } else {
      return (
        <View style={Styles.attendanceHistoryImageView} >
          <Image
            source={require('../assets/images/child.png')}
            style={Styles.attendanceHistoryImage}
          />
        </View>
      )
    }
  }


  const getAttendanceComponents = () => {
    return (
      props.attendance.map((status, i) => {
        return (
          <View
            key={i}
            style={Styles.dateStatusHolder}
          >
            <View
              style={[
                Styles.dateStatus,
                status
                  ? { backgroundColor: Colors.highlightText }
                  : { backgroundColor: Colors.mainText }
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
          { getChildImg() }

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
