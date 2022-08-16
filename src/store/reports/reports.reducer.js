import { initialState } from '../initialState';
import {
    REPORTS_GET_ALL_DATA_LOADING,
    REPORTS_GET_ALL_DATA_LOADED,
    REPORTS_GET_ALL_DATA_FAIL,
    REPORTS_CREATE_LOADING,
    REPORTS_CREATE_LOADED,
    REPORTS_CREATE_FAIL
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
        case REPORTS_GET_ALL_DATA_LOADED:
            // console.log('reducer reports ->' , action.payload);
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
        case REPORTS_CREATE_LOADING:
            return {
                ...state,
                reportsCreateLoading: true,
                reportsCreateLoaded: false,
                reportsCreateFail: false
            }
        case REPORTS_CREATE_LOADED:
            // console.log('reducer reports ->' , action.payload);
            return {
                ...state,
                reportsCreateData: action.payload,
                reportsCreateLoading: false,
                reportsCreateLoaded: true,
                reportsCreateFail: false
            }
        case REPORTS_CREATE_FAIL:
            return {
                ...state,
                reportsCreateLoading: false,
                reportsCreateLoaded: false,
                reportsCreateFail: true
            }
        default:
            return state;
    }
}