import { createStackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import SignUp from '../screens/SignUp'
import SignIn from '../screens/SignIn'


const routeConfig = {
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null,
    },
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null,
    },
  },
}

const navConfig = {
  initialRouteName: 'Home',
}


export default createStackNavigator(routeConfig, navConfig)
