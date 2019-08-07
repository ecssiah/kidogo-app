import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from '../screens/Home'
import SignUp from "../screens/SignUp";

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
})

export default createAppContainer(AppNavigator)