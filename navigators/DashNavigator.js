import { createStackNavigator } from 'react-navigation'

import Dash from '../screens/Dash'
import EnrollmentNavigator from './EnrollmentNavigator';
import AttendanceNavigator from './AttendanceNavigator';


const routeConfig = {
  Dash: {
    screen: Dash,
    navigationOptions: {
      header: null,
    },
  },
  Attendance: {
    screen: AttendanceNavigator,
    navigationOptions: {
      header: null,
    },
  },
  Enrollment: {
    screen: EnrollmentNavigator,
    navigationOptions: {
      header: null,
    },
  },
}

const navConfig = {
  initialRouteName: 'Dash',
}


export default createStackNavigator(routeConfig, navConfig)
