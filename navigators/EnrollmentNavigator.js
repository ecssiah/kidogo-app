import { createStackNavigator } from 'react-navigation'

import Children from '../screens/Children'
import Guardians from '../screens/Guardians'
import Contacts from '../screens/Contacts';


const routeConfig = {
  Children: {
    screen: Children,
    navigationOptions: {
      header: null,
    },
  },
  Guardians: {
    screen: Guardians,
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
}

const navConfig = {
  initialRouteName: 'Children',
}


export default createStackNavigator(routeConfig, navConfig)
