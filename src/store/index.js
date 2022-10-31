import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import { reportsReducer } from './reports/reports.reducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const rootReducer = combineReducers({
    reports: reportsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);