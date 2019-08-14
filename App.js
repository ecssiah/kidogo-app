import React, { useEffect, useState } from 'react';
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import AppNavigator from './navigators/AppNavigator';
import { createAppContainer } from 'react-navigation';
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import bcrypt from 'react-native-bcrypt'
import isaac from 'isaac'
import { resetStore } from './utilities/store';
import Loading from './components/Loading';

Amplify.configure(awsconfig)

bcrypt.setRandomFallback((len) => {
  const buf = new Uint8Array(len)

  return buf.map(() => Math.floor(isaac.random() * 256))
})

const AppContainer = createAppContainer(AppNavigator)

const App = () => {
  const [resourcesLoaded, setResourcesLoaded] = useState(false)


  const loadResources = async () => {
    await resetStore()
    await loadFonts()
  }


  const loadFonts = async () => {
    await Font.loadAsync({
      'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf')
    })
  }


  if (!resourcesLoaded) {
    return (
      <AppLoading
        startAsync={loadResources}
        onFinish={() => setResourcesLoaded(true)}
        onError={console.warn}
      />
    )
  }

  return <AppContainer />
}

export default App
