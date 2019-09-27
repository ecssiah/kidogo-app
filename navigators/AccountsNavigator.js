import { createStackNavigator } from 'react-navigation'

import Accounts from '../screens/Accounts';
import Account from '../screens/Account';
import Payments from '../screens/Payments';


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
  Payments: {
    screen: Payments,
    navigationOptions: {
      header: null,
    },
  },
}

const navConfig = {
  initialRouteName: 'Accounts',
}


export default createStackNavigator(routeConfig, navConfig)
