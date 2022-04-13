import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import { Routes } from './src/navigation/routes';
import { colors } from './src/styles';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.primaryColor}
      />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
