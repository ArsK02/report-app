import { initialState } from '../initialState';
import {
    APP_STATE_LOADING,
    APP_STATE_LOADED,
    APP_STATE_FAIL,
    REPORTS_GET_ALL_DATA_LOADING,
    REPORTS_GET_ALL_DATA_LOADED,
    REPORTS_GET_ALL_DATA_FAIL,
    REPORTS_GET_BY_MONTH_LOADING,
    REPORTS_GET_BY_MONTH_LOADED,
    REPORTS_GET_BY_MONTH_FAIL,
    REPORTS_CREATE_LOADING,
    REPORTS_CREATE_LOADED,
    REPORTS_CREATE_FAIL,
    REPORTS_EDIT_LOADING,
    REPORTS_EDIT_LOADED,
    REPORTS_EDIT_FAIL,
    REPORTS_DELETE_LOADING,
    REPORTS_DELETE_LOADED,
    REPORTS_DELETE_FAIL,
    REPORTS_GET_MIN_YEAR_LOADING,
    REPORTS_GET_MIN_YEAR_LOADED,
    REPORTS_GET_MIN_YEAR_FAIL,
    REPORST_GET_STATS_BY_YEAR_LOADING,
    REPORST_GET_STATS_BY_YEAR_LOADED,
    REPORST_GET_STATS_BY_YEAR_FAIL,
    ACTIVE_REPORT_LOADING,
    ACTIVE_REPORT_LOADED,
    ACTIVE_REPORT_FAIL
} from './reports.types';

export const reportsReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_STATE_LOADING:
            return {
                ...state,
                appStateLoading: true,
                appStateLoaded: false,
                appStateFail: false
            }
        case APP_STATE_LOADED:
            // console.log('reducer reports ->' , action.payload);
            return {
                ...state,
                appStateData: action.payload,
                appStateLoading: false,
                appStateLoaded: true,
                appStateFail: false
            }
        case APP_STATE_FAIL:
            return {
                ...state,
                appStateLoading: false,
                appStateLoaded: false,
                appStateFail: true
            }

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

        case REPORTS_GET_BY_MONTH_LOADING:
            return {
                ...state,
                reportsGetByMonthLoading: true,
                reportsGetByMonthLoaded: false,
                reportsGetByMonthFail: false
            }
        case REPORTS_GET_BY_MONTH_LOADED:
            // console.log('reducer reports ->' , action.payload);
            return {
                ...state,
                reportsGetByMonthData: action.payload,
                reportsGetByMonthLoading: false,
                reportsGetByMonthLoaded: true,
                reportsGetByMonthFail: false
            }
        case REPORTS_GET_BY_MONTH_FAIL:
            return {
                ...state,
                reportsGetByMonthLoading: false,
                reportsGetByMonthLoaded: false,
                reportsGetByMonthFail: true
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

        case REPORTS_EDIT_LOADING:
            return {
                ...state,
                reportsEditLoading: true,
                reportsEditLoaded: false,
                reportsEditFail: false
            }
        case REPORTS_EDIT_LOADED:
            // console.log('reducer reports ->' , action.payload);
            return {
                ...state,
                reportsEditData: action.payload,
                reportsEditLoading: false,
                reportsEditLoaded: true,
                reportsEditFail: false
            }
        case REPORTS_EDIT_FAIL:
            return {
                ...state,
                reportsEditLoading: false,
                reportsEditLoaded: false,
                reportsEditFail: true
            }

        case REPORTS_DELETE_LOADING:
            return {
                ...state,
                reportsDeleteLoading: true,
                reportsDeleteLoaded: false,
                reportsDeleteFail: false
            }
        case REPORTS_DELETE_LOADED:
            // console.log('reducer reports ->' , action.payload);
            return {
                ...state,
                reportsDeleteData: action.payload,
                reportsDeleteLoading: false,
                reportsDeleteLoaded: true,
                reportsDeleteFail: false
            }
        case REPORTS_DELETE_FAIL:
            return {
                ...state,
                reportsDeleteLoading: false,
                reportsDeleteLoaded: false,
                reportsDeleteFail: true
            }

        case REPORTS_GET_MIN_YEAR_LOADING:
            return {
                ...state,
                reportsGetMinYearLoading: true,
                reportsGetMinYearLoaded: false,
                reportsGetMinYearFail: false
            }
        case REPORTS_GET_MIN_YEAR_LOADED:
            // console.log('reducer reports ->' , action.payload);
            return {
                ...state,
                reportsGetMinYearData: action.payload,
                reportsGetMinYearLoading: false,
                reportsGetMinYearLoaded: true,
                reportsGetMinYearFail: false
            }
        case REPORTS_GET_MIN_YEAR_FAIL:
            return {
                ...state,
                reportsGetMinYearLoading: false,
                reportsGetMinYearLoaded: false,
                reportsGetMinYearFail: true
            }

        case REPORST_GET_STATS_BY_YEAR_LOADING:
            return {
                ...state,
                reportsGetStatsByYearLoading: true,
                reportsGetStatsByYearLoaded: false,
                reportsGetStatsByYearFail: false
            }
        case REPORST_GET_STATS_BY_YEAR_LOADED:
            // console.log('reducer reports ->' , action.payload);
            return {
                ...state,
                reportsGetStatsByYearData: action.payload,
                reportsGetStatsByYearLoading: false,
                reportsGetStatsByYearLoaded: true,
                reportsGetStatsByYearFail: false
            }
        case REPORST_GET_STATS_BY_YEAR_FAIL:
            return {
                ...state,
                reportsGetStatsByYearLoading: false,
                reportsGetStatsByYearLoaded: false,
                reportsGetStatsByYearFail: true
            }

        case ACTIVE_REPORT_LOADING:
            return {
                ...state,
                activeReportLoading: true,
                activeReportLoaded: false,
                activeReportFail: false
            }
        case ACTIVE_REPORT_LOADED:
            // console.log('reducer reports ->' , action.payload);
            return {
                ...state,
                activeReportData: action.payload,
                activeReportLoading: false,
                activeReportLoaded: true,
                activeReportFail: false
            }
        case ACTIVE_REPORT_FAIL:
            return {
                ...state,
                activeReportLoading: false,
                activeReportLoaded: false,
                activeReportFail: true
            }
        default:
            return state;
    }
}