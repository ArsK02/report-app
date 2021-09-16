import { initialState } from '../initialState';
import {
    REPORTS_GET_ALL_DATA_LOADING,
    REPORTS_GET_ALL_DATA_LOADED,
    REPORTS_GET_ALL_DATA_FAIL
} from './reports.types';

export const reportsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REPORTS_GET_ALL_DATA_LOADING:
            return {
                ...state,
                reportsGetAllDataLoading: true,
                reportsGetAllDataLoaded: false,
                reportsGetAllDataFail: false
            }
        case REPORTS_GET_ALL_DATA_LOADING:
            return {
                ...state,
                reportsGetAllDataData: action.payload,
                reportsGetAllDataLoading: false,
                reportsGetAllDataLoaded: true,
                reportsGetAllDataFail: false
            }
        case REPORTS_GET_ALL_DATA_FAIL:
            return {
                ...state,
                reportsGetAllDataLoading: false,
                reportsGetAllDataLoaded: false,
                reportsGetAllDataFail: true
            }
        default:
            return state;
    }
}