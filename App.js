import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import { AppNavigation } from './src/navigation/AppNavigation';


export default function App() {
  return (
    <Provider store={store}>
        <BottomSheetModalProvider>
          <AppNavigation />
        </BottomSheetModalProvider>
    </Provider>
  );
}