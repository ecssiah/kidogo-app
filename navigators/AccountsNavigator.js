import { createStackNavigator } from 'react-navigation'

import Accounts from '../screens/Accounts';
import Account from '../screens/Account';


const routeConfig = {
  Accounts: {
    screen: Accounts,
    navigationOptions: {
      header: null,
    },
  },
  Account: {
    screen: Account,
    navigationOptions: {
      header: null,
    },
  },
}

const navConfig = {
  initialRouteName: 'Accounts',
}


export default createStackNavigator(routeConfig, navConfig)
