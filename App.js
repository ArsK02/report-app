import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppNavigation } from './src/navigation/AppNavigation';


export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <AppNavigation />
      </SafeAreaView>
    </Provider>
  );
}