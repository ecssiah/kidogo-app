import React, { useState } from 'react'
import { Text, ScrollView, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { Audio } from 'expo-av'
import { LinearGradient } from 'expo-linear-gradient'
import { GetFullDate } from '../utilities/dates';

import AttendanceCard from '../components/AttendanceCard'
import { Colors } from '../constants/Style';
import { CHECKIN } from '../constants/Attendance';


const CheckIn = (props) => {
  const [soundObject, setSoundObject] = useState(null)


  const getAttendanceCards = () => {

          attendanceToday
            ? Object.keys(attendanceToday).map((id, i) => {
                let cardDetails = attendanceToday[id]

                return (
                  <AttendanceCard
                    key={i}
                    isMorning={true}
                    {...cardDetails}
                    onPress={() => {
                      props.updateAttendance(CHECKIN, id)
                    }}
                  />
                )
              })
            : null
  }


  const childrenHere = () => {

  }


  const getAttendance = () => {
    const childrenHere = childrenHere()

    if (childrenHere.total === childrenHere.hereToday) {
      return 'All children are here'
    } else if (childrenHere.hereToday === 1) {
      return '1 child is here'
    } else {
      return `${childrenHere.hereToday} children are here`
    }
  }


  const toggleHelpAudio = async () => {
    try {
      if (soundObject) {
        await soundObject.stopAsync()

        setSoundObject(null)
      } else {
        const soundObject = new Audio.Sound()
        await soundObject.loadAsync(require('../assets/audio/attendance.mp3'))
        await soundObject.playAsync()

        setSoundObject(soundObject)
      }
    } catch(error) {
      console.error(error)
    }
  }


  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[Colors.gradient_dark, Colors.gradient_light]}
    >
      <Text style={[Styles.h1, Styles.raleway]}>
        Check In
      </Text>

      <Text style={Styles.h2}>
        { GetFullDate() }
      </Text>

      <Text style={[Styles.text, { marginLeft: 10, marginBottom: 20 }]} >
        { getAttendance() }
      </Text>

      <ScrollView contentContainerStyle={Styles.attendanceHolder} >
        {
        }
      </ScrollView>

      <TouchableOpacity
        style={Styles.helpButton}
        onPress={toggleHelpAudio}
      >
        <View style={Styles.helpButtonIcon} >
          <Icon name="record-voice-over" color="#3c233d" size={36} />
        </View>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default CheckIn




// class CheckIn extends Component
// {
//   constructor(props) {
//     super(props)

//     this.state = {
//       d: new Dates(),
//       soundObject: null,
//     }
//   }


//   static navigationOptions = {
//     headerLeft: null,
//     headerStyle: {
//       backgroundColor: '#0C000E',
//       height: 0
//     }
//   }


//   childrenHere = () => {
//     const attendanceToday = this.props.attendance[this.state.d.getToday()]

//     if (!attendanceToday) {
//       return { total: 0, hereToday: 0 }
//     }

//     const childList = Object.keys(attendanceToday).reduce(
//       (acc, id) => {
//         childHere = attendanceToday[id].checkIn

//         if (childHere) {
//           acc.hereToday++
//         }

//         acc.total++

//         return acc
//       },
//       {
//         total: 0,
//         hereToday: 0,
//       }
//     )

//     return childList
//   }


//   playAudio = async () => {
//     try {
//       if (!this.state.soundObject) {
//         const soundObject = new Audio.Sound()
//         await soundObject.loadAsync(require('../assets/audio/attendance.mp3'))
//         await soundObject.playAsync()

//         this.setState({
//           soundObject
//         })
//       } else {
//         await this.state.soundObject.stopAsync()
//         this.setState({soundObject: null})
//       }
//     } catch(err) {
//       console.error(err)
//       this.setState({ error:'We could not play the audio file' })
//     }
//   }

//   componentDidMount = () => {
//     // if(!this.props.attendance[this.state.d.getToday()]){
//       this.props.getAttendance(this.state.d.getToday())
//     // }
//   }

//   render() {
//     const attendanceToday = this.props.attendance[this.state.d.getToday()]

//     return (
//       <LinearGradient
//         style={{ flex: 1 }}
//         colors={[Colors.gradient_dark, Colors.gradient_light]}
//       >
//         <Text style={[Styles.h1, Styles.raleway]}>
//           Check In
//         </Text>

//         <Text style={Styles.h2}>
//           {
//             `${this.state.d.getDay()}, ` +
//             `${this.state.d.getDate()}, ` +
//             `${this.state.d.getMonth()} ${this.state.d.getYear()}`
//           }
//         </Text>

//         <Text style={[styles.text, { marginLeft: 10, marginBottom: 20 }]} >
//           {
//             this.childrenHere().total === this.childrenHere().hereToday
//               ? 'All children are here'
//               : this.childrenHere().hereToday === 1
//                 ? '1 child is here'
//                 : this.childrenHere().hereToday + ' children are here'
//           }
//         </Text>

//         <ScrollView contentContainerStyle={styles.attendanceHolder} >
//           {
//             attendanceToday
//               ? Object.keys(attendanceToday).map((id, i) => {
//                 let cardDetails = attendanceToday[id]
//                   return (
//                     <AttendanceCard
//                       key={i}
//                       isMorning={true}
//                       {...cardDetails}
//                       onPress={() => {
//                         this.props.changeCheckInOut(
//                           this.state.d.getToday(), id, 'checkIn'
//                         )
//                       }}
//                     />
//                   )
//                 })
//               : null
//           }
//         </ScrollView>

//         <TouchableOpacity
//           style={{
//             backgroundColor: '#ffffff80',
//             position: 'absolute',
//             bottom: -75, left: -75,
//             width: 150, height: 150,
//             borderRadius: 75
//           }}
//           onPress={this.playAudio}
//         >
//           <View style={{ position: 'absolute', bottom: 85, left: 80 }}>
//             <Icon name="record-voice-over" color="#3C233D" size={36} />
//           </View>
//         </TouchableOpacity>
//       </LinearGradient>
//     )
//   }
// }

// const mapStateToProps = state => ({
//   attendance: state.attendance,
// })

// const mapDispatchToProps = dispatch => bindActionCreators(
//   { getAttendance, changeCheckInOut }, dispatch
// )

// export default connect(mapStateToProps, mapDispatchToProps)(CheckIn)