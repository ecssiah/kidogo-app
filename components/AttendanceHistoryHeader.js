import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Styles } from '../constants/Style';
import { Icon } from 'react-native-elements';


const AttendanceHistoryHeader = (props) => {
  const [date1, setDate1] = useState(null)
  const [date2, setDate2] = useState(null)


  const getDateSpanComponents = () => {
    return props.dateSpan.map((date, i) => {
      <View key={i} style={Styles.date} >
        <Text style={Styles.dateText} >
          { Number(date.substring(0, 2)) + '/' + Number(date.substring(3, 5)) }
        </Text>
      </View>
    })
  }


  return (
    <View style={Styles.historyHeader} >
      <Text style={[Styles.h1, Styles.raleway, { marginBottom: 0}]} >
        Attendance History
      </Text>

      <View style={Styles.dateHolder} >
        <TouchableOpacity onPress={() => props.changeWeeks('back')} >
          <Icon name="chevron-left" size={40} color="white" />
        </TouchableOpacity>

        <Text style={Styles.h2} >
          {date1} - {date2}
        </Text>

        <TouchableOpacity
          onPress={() => props.changeWeeks('forward')}
          style={{ opacity: 0.3 }}
        >
          <Icon name="chevron-right" size={40} color="white" />
        </TouchableOpacity>
      </View>

      <View style={Styles.dates} >
        <View style={{ flex: 0.3 }} />

        { getDateSpanComponents() }
      </View>
    </View>
  )
}

export default AttendanceHistoryHeader
