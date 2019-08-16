import React, { useState } from 'react';
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import { AppLoading } from 'expo'
import { ResetStore } from './utilities/localstore';
import { LoadFonts, ConfigureBcrypt } from './utilities/config';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './navigators/AppNavigator';

Amplify.configure(awsconfig)

const AppContainer = createAppContainer(AppNavigator)

const App = () => {
  const [appLoading, setAppLoading] = useState(true)


  const configureApp = async () => {
    // await ResetStore()
    await LoadFonts()

    ConfigureBcrypt()
  }


  if (appLoading) {
    return (
      <AppLoading
        startAsync={configureApp}
        onFinish={() => setAppLoading(false)}
        onError={console.warn}
      />
    )
  }

  return <AppContainer />
}

export default App
