import React, { useEffect } from 'react';
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import AppNavigator from './navigators/AppNavigator';
import { createAppContainer } from 'react-navigation';
import * as Font from 'expo-font'
import bcrypt from 'react-native-bcrypt'
import isaac from 'isaac'

Amplify.configure(awsconfig)

bcrypt.setRandomFallback((len) => {
  const buf = new Uint8Array(len)

  return buf.map(() => Math.floor(isaac.random() * 256))
})

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
