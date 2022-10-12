import {
    REPORTS_GET_ALL_DATA_LOADING,
    REPORTS_GET_ALL_DATA_LOADED,
    REPORTS_GET_ALL_DATA_FAIL,
    REPORTS_GET_BY_MONTH_LOADING,
    REPORTS_GET_BY_MONTH_LOADED,
    REPORTS_GET_BY_MONTH_FAIL,
    REPORTS_CREATE_LOADING,
    REPORTS_CREATE_LOADED,
    REPORTS_CREATE_FAIL,
    REPORTS_GET_MIN_YEAR_LOADING,
    REPORTS_GET_MIN_YEAR_LOADED,
    REPORTS_GET_MIN_YEAR_FAIL
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

export function reportsGetByMonthLoadingAction(data) {
    return {
        type: REPORTS_GET_BY_MONTH_LOADING,
        payload: data
    }
}
export function reportsGetByMonthLoadedAction(data) {
    return {
        type: REPORTS_GET_BY_MONTH_LOADED,
        payload: data
    }
}
export function reportsGetByMonthFailAction(data) {
    return {
        type: REPORTS_GET_BY_MONTH_FAIL,
        payload: data
    }
}


export function reportsCreateLoadingAction(data) {
    return {
        type: REPORTS_CREATE_LOADING,
        payload: data
    }
}
export function reportsCreateLoadedAction(data) {
    return {
        type: REPORTS_CREATE_LOADED,
        payload: data
    }
}
export function reportsCreateFailAction(data) {
    return {
        type: REPORTS_CREATE_FAIL,
        payload: data
    }
}


export function reportsGetMinYearLoadingAction(data) {
    return {
        type: REPORTS_GET_MIN_YEAR_LOADING,
        payload: data
    }
}
export function reportsGetMinYearLoadedAction(data) {
    return {
        type: REPORTS_GET_MIN_YEAR_LOADED,
        payload: data
    }
}
export function reportsGetMinYeareFailAction(data) {
    return {
        type: REPORTS_GET_MIN_YEAR_FAIL,
        payload: data
    }
}