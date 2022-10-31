import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor} from './src/store';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';

import './localization';
import { AppNavigation } from './src/navigation/AppNavigation';
import { LogicCore } from './src/core/Logic.core';

import { PersistGate } from "redux-persist/integration/react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
              <LogicCore />
              <AppNavigation />
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </PersistGate>
      </Provider>
      <StatusBar animated translucent />
    </>
  );
}