import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from '../screens/Home'
import SignUp from '../screens/SignUp'
import Dash from '../screens/Dash'
import Recover from '../screens/Recover'


const AppNavigator = createStackNavigator({
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
  Dash: {
    screen: Dash,
    navigationOptions: {
      header: null,
    },
  },
  Recover: {
    screen: Recover,
    navigationOptions: {
      header: null,
    },
  },
})

export default createAppContainer(AppNavigator)