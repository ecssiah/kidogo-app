import React from 'react'
import { createBottomTabNavigator } from "react-navigation";
import { Icon } from 'react-native-elements'
import { Styles } from "../constants/Style";

import Dash from '../screens/Dash'
import Upload from '../screens/Upload'
import Accounts from '../screens/Accounts'

const routeConfig = {
  Dash: Dash,
  Accounts: Accounts,
  Upload: Upload,
}

const navConfig = {
  initialRouteName: 'Dash',
  tabBarOptions: {
    style: Styles.headerStyle,
    showLabel: true,
    activeTintColor: 'white',
    inactiveTintColor: '#777777',
  },
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      switch(navigation.state.routeName) {
        case 'Dash': {
          return <Icon name="home" color={tintColor} size={30} />
        }
        case 'Accounts': {
          return <Icon name="people" color={tintColor} size={30} />
        }
        case 'Upload': {
          return <Icon name="cloud-upload" color={tintColor} size={30} />
        }
        default: {
          console.error('Unhandled route name: ' + navigation.state.routeName)
        }
      }
    }
  }),
}


export default createBottomTabNavigator(routeConfig, navConfig)
