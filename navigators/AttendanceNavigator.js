import { createStackNavigator } from 'react-navigation'

import Attendance from '../screens/Attendance';
import CheckIn from '../screens/CheckIn'
import CheckOut from '../screens/CheckOut'
import AttendanceHistory from '../screens/AttendanceHistory';


const routeConfig = {
  Attendance: {
    screen: Attendance,
    navigationOptions: {
      header: null,
    },
  },
  CheckIn: {
    screen: CheckIn,
    navigationOptions: {
      header: null,
    },
  },
  CheckOut: {
    screen: CheckOut,
    navigationOptions: {
      header: null,
    },
  },
  AttendanceHistory: {
    screen: AttendanceHistory,
    navigationOptions: {
      header: null,
    },
  },
}

const navConfig = {
  initialRouteName: 'Attendance',
}


export default createStackNavigator(routeConfig, navConfig)
