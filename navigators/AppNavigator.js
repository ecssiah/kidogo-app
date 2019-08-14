import { createSwitchNavigator, createAppContainer } from "react-navigation";

import AuthNav from './AuthNav'
import BottomNav from './BottomNav'


const routeConfig = {
  Auth: AuthNav,
  App: BottomNav,
}


const navConfig = {
  initialRouteName: 'Auth',
}


const AppSwitch = createSwitchNavigator(routeConfig, navConfig)


export default createAppContainer(AppSwitch)
