import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { Home } from './src/features/Home';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <Home />
    </SafeAreaView>
  );
};

export default App;
