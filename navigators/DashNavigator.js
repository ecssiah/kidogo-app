import { createStackNavigator } from 'react-navigation'

import Dash from '../screens/Dash'
import AttendanceNavigator from './AttendanceNavigator';
import FinancesNavigator from './FinancesNavigator';
import EnrollmentNavigator from './EnrollmentNavigator';
import QuestionsNavigator from './QuestionsNavigator';


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
  Finances: {
    screen: FinancesNavigator,
    navigationOptions: {
      header: null,
    },
  },
  Questions: {
    screen: QuestionsNavigator,
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
