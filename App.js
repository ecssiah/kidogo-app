import React, { useEffect } from 'react';
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import * as Font from 'expo-font'
import AppNavigator from './navigators/AppNavigator';
import { createAppContainer } from 'react-navigation';

Amplify.configure(awsconfig)

const AppContainer = createAppContainer(AppNavigator)

const App = () => {
  useEffect(() => {
    loadFonts()
  }, [])


  const loadFonts = async () => {
    await Font.loadAsync({
      'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf')
    })
  }

  return (
    <AppContainer />
  );
}

export default App
