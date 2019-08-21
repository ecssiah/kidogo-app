import React, { useState } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Styles } from '../constants/Style';
import { GetFullDate } from '../utilities/dates';


const CheckOut = (props) => {


  const childrenHere = () => {

  }


  const getAttendance = () => {
    const childrenHere = childrenHere()

    childrenHere.total === childrenHere.hereToday
      ? 'All children are here'
      : this.childrenHere.hereToday === 1
        ? '1 child is here'
        : this.childrenHere.hereToday + ' children are here'
  }


  return (
    <Backdrop>
      <Text style={[Styles.h1, Styles.raleway]}>
        Check Out
      </Text>

      <Text style={Styles.h2}>
        { GetFullDate() }
      </Text>

      {
        this.props.attendance && attendanceToday
          ? <View>
              <Text
                style={[Styles.text, { marginLeft: 10, marginBottom: 20 }]}
              >
                { getAttendance() }
              </Text>

              <ScrollView contentContainerStyle={styles.attendanceHolder}>
                {
                  attendanceToday
                    ? Object.keys(attendanceToday).map((id, i) => {
                        let cardDetails = attendanceToday[id]

                        if (!!cardDetails.checkIn) {
                          return (
                            <AttendanceCard
                              key={i}
                              {...cardDetails}
                              onPress={() => {
                                this.props.changeCheckInOut(
                                  this.state.d.getToday(), id, 'checkOut'
                                )
                              }}
                              isMorning={false}
                            />
                          )
                        } else {
                          return
                        }
                      })
                    : <Text style={[styles.text, { marginLeft: 10 }]}>
                        No one was checked in today.
                      </Text>
                }
              </ScrollView>
            </View>
          : <Text style={styles.text}>Attendance was not taken today.</Text>
      }

    </Backdrop>
  )
}

export default CheckOut

// class CheckOut extends Component
// {
//   constructor(props) {
//     super(props)

//     this.state = {
//       d: new Dates(),
//     }
//   }


//   static navigationOptions = {
//     headerLeft: null,
//     headerStyle: {
//       backgroundColor: '#0C000E',
//       height: 0,
//     }
//   }


//   componentDidMount = () => {
//     this.props.getAttendance(this.state.d.getToday(), 'checkout')
//   }


//   childrenHere = () => {
//     const attendanceToday = this.props.attendance[this.state.d.getToday()]

//     return Object.keys(attendanceToday).reduce(
//       (acc, id) => {
//         let childArrived = attendanceToday[id].checkIn

//         if (childArrived) {
//           acc.total++
//         }

//         let childLeft = attendanceToday[id].checkOut

//         if (childArrived && !childLeft) {
//           acc.remaining++
//         }

//         return acc
//       },
//       { total: 0, remaining: 0 }
//     )
//   }

//   render() {
//     const attendanceToday = this.props.attendance[this.state.d.getToday()]

//     return (
//       <LinearGradient
//         style={{ flex: 1 }}
//         colors={['#11011B', '#3C233D']}
//       >
        // <Header navigation={this.props.navigation} />
        // <Text style={[styles.h1, styles.raleway]}>Check Out</Text>
        // <Text style={styles.h2}>
        //   {
        //     `${this.state.d.getDay()}, ` +
        //     `${this.state.d.getDate()}, ` +
        //     `${this.state.d.getMonth()} ${this.state.d.getYear()}`
        //   }
        // </Text>

        // {
        //   this.props.attendance && attendanceToday
        //     ? <View>
        //         <Text
        //           style={[styles.text, { marginLeft: 10, marginBottom: 20 }]}
        //         >
        //           {
        //             this.childrenHere().total === this.childrenHere().remaining
        //               ? 'No children have left'
        //               : this.childrenHere().remaining === 1
        //                 ? '1 child is still here'
        //                 : this.childrenHere().remaining + ' children are still here'
        //           }
        //         </Text>

        //         <ScrollView contentContainerStyle={styles.attendanceHolder}>
        //           {
        //             attendanceToday
        //               ? Object.keys(attendanceToday).map((id, i) => {
        //                   let cardDetails = attendanceToday[id]

        //                   if (!!cardDetails.checkIn) {
        //                     return (
        //                       <AttendanceCard
        //                         key={i}
        //                         {...cardDetails}
        //                         onPress={() => {
        //                           this.props.changeCheckInOut(
        //                             this.state.d.getToday(), id, 'checkOut'
        //                           )
        //                         }}
        //                         isMorning={false}
        //                       />
        //                     )
        //                   } else {
        //                     return
        //                   }
        //                 })
        //               : <Text style={[styles.text, { marginLeft: 10 }]}>
        //                   No one was checked in today.
        //                 </Text>
        //           }
        //         </ScrollView>
        //       </View>
        //     : <Text style={styles.text}>Attendance was not taken today.</Text>
        // }
//         </LinearGradient>
//     )
//   }
// }

// const mapStateToProps = state => ({ attendance: state.attendance })

// const mapDispatchToProps = dispatch => bindActionCreators(
//   { getAttendance, changeCheckInOut }, dispatch
// )

// export default connect(mapStateToProps, mapDispatchToProps)(CheckOut)