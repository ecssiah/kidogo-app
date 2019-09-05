import { createStackNavigator } from 'react-navigation'

import Questions from '../screens/Questions'


const routeConfig = {
  Questions: {
    screen: Questions,
    navigationOptions: {
      header: null,
    },
  },
}

const navConfig = {
  initialRouteName: 'Questions',
}


export default createStackNavigator(routeConfig, navConfig)
