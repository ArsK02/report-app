import { createStore, combineReducers, applyMiddleware } from 'redux';

import { reportsReducer } from './reports/reports.reducer';

const rootReducer = combineReducers({
    reports: reportsReducer
});

export default createStore(rootReducer);