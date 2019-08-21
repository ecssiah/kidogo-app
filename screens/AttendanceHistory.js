import React from 'react'

import Backdrop from '../components/Backdrop';


const AttendanceHistory = (props) => {
  return (
    <Backdrop>
      <AttendanceHistoryView
        span={this.state.dateSpan}
        changeWeeks={this.changeWeeks}
        dateMod={this.state.dateMod}
      />

      <ScrollView style={{ marginTop: 10 }}>
        {
          this.accountsToChildren().map((child, i) => {
            return (
              <AttendanceHistoryRow
                key={i}
                i={i}
                {...child}
                attendanceStatus={this.attendanceByChild(child.id)}
              />
            )
          })
        }
      </ScrollView>

    </Backdrop>
  )
}

export default AttendanceHistory
