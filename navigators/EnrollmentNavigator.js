import { createStackNavigator } from 'react-navigation'

import Guardian from '../screens/Guardian'
import Contacts from '../screens/Contacts';
import Children from '../screens/Children'


const routeConfig = {
  Guardian: {
    screen: Guardian,
    navigationOptions: {
      header: null,
    },
  },
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      header: null,
    },
  },
  Children: {
    screen: Children,
    navigationOptions: {
      header: null,
    },
  },
}

const navConfig = {
  initialRouteName: 'Guardian',
}


export default createStackNavigator(routeConfig, navConfig)
