import { createSwitchNavigator } from "react-navigation";

import AuthNavigator from './AuthNavigator'
import BottomNavigator from './BottomNavigator'


const routeConfig = {
  Auth: AuthNavigator,
  App: BottomNavigator,
}


const navConfig = {
  initialRouteName: 'Auth',
}


export default createSwitchNavigator(routeConfig, navConfig)
