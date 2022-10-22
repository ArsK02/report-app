import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';

import './localization';
import { AppNavigation } from './src/navigation/AppNavigation';
import { LogicCore } from './src/core/Logic.core';

import { ReportsRealmContext } from './src/store/reports/models/index';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const { RealmProvider } = ReportsRealmContext;

export default function App() {
  return (
    <>
      <RealmProvider>
        <Provider store={store}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
              <LogicCore />
              <AppNavigation />
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </Provider>
      </RealmProvider>
      <StatusBar animated translucent />
    </>
  );
}