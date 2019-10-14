import React from 'react'
import { createBottomTabNavigator } from "react-navigation";
import { Icon } from 'react-native-elements'
import { Styles } from "../constants/Style";
import { TabNames, Tab } from '../constants/Accounts';

import DashNavigator from '../navigators/DashNavigator';
import AccountsNavigator from './AccountsNavigator';
import Upload from '../screens/Upload'


const routeConfig = {
  [Tab.Dash]: DashNavigator,
  [Tab.Accounts]: AccountsNavigator,
  [Tab.Upload]: Upload,
}


const navConfig = {
  initialRouteName: Tab.Dash,
  tabBarOptions: {
    style: Styles.headerStyle,
    showLabel: true,
    activeTintColor: 'white',
    inactiveTintColor: '#777777',
  },
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarLabel: TabNames[navigation.state.routeName],
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      switch(navigation.state.routeName) {
        case Tab.Dash: {
          return <Icon name="home" color={tintColor} size={30} />
        }
        case Tab.Accounts: {
          return <Icon name="people" color={tintColor} size={30} />
        }
        case Tab.Upload: {
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
