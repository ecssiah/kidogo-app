import { createStackNavigator } from 'react-navigation'

import Dash from '../screens/Dash'
import CheckIn from '../screens/CheckIn'
import CheckOut from '../screens/CheckOut'
import Finances from '../screens/Finances'
import Questions from '../screens/Questions'
import Payments from '../screens/Payments'
import EnrollmentNavigator from './EnrollmentNavigator';


const routeConfig = {
  Dash: {
    screen: Dash,
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
  Finances: {
    screen: Finances,
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
  Payments: {
    screen: Payments,
    navigationOptions: {
      header: null,
    },
  },
  Questions: {
    screen: Questions,
    navigationOptions: {
      header: null,
    },
  },
}

const navConfig = {
  initialRouteName: 'Dash',
}


export default createStackNavigator(routeConfig, navConfig)
