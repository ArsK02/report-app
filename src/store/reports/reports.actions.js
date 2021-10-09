import {
    REPORTS_GET_ALL_DATA_LOADING,
    REPORTS_GET_ALL_DATA_LOADED,
    REPORTS_GET_ALL_DATA_FAIL
} from './reports.types';

export function reportsGetAllDataLoadingAction(data) {
    return {
        type: REPORTS_GET_ALL_DATA_LOADING,
        payload: data
    }
}
export function reportsGetAllDataLoadedAction(data) {
    return {
        type: REPORTS_GET_ALL_DATA_LOADED,
        payload: data
    }
}
export function reportsGetAllDataFailAction(data) {
    return {
        type: REPORTS_GET_ALL_DATA_FAIL,
        payload: data
    }
}