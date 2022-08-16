import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import { AppNavigation } from './src/navigation/AppNavigation';

import { ReportsRealmContext } from './src/store/reports/models/index';

const { RealmProvider } = ReportsRealmContext;

export default function App() {
  return (
    <RealmProvider>
      <Provider store={store}>
        <BottomSheetModalProvider>
            <AppNavigation />
          </BottomSheetModalProvider>
      </Provider>
    </RealmProvider>
  );
}