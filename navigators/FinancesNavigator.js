import { createStackNavigator } from 'react-navigation'

import Finances from '../screens/Finances';


const routeConfig = {
  Finances: {
    screen: Finances,
    navigationOptions: {
      header: null,
    },
  },
}

const navConfig = {
  initialRouteName: 'Finances',
}


export default createStackNavigator(routeConfig, navConfig)
