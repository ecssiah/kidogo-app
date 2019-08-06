import React from 'react';
import AppNavigator from './navigators/AppNavigator';
import { createAppContainer } from 'react-navigation';

const AppContainer = createAppContainer(AppNavigator)

const App = () => {
  return (
    <AppContainer />
  );
}

export default App
