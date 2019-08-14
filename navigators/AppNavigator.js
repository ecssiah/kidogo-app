import { createSwitchNavigator } from "react-navigation";

import AuthNav from './AuthNav'
import BottomNav from './BottomNav'


const routeConfig = {
  Auth: AuthNav,
  App: BottomNav,
}


const navConfig = {
  initialRouteName: 'Auth',
}


export default createSwitchNavigator(routeConfig, navConfig)
