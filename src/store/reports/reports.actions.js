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

export function appStateLoadingAction(data) {
    return {
        type: APP_STATE_LOADING,
        payload: data
    }
}
export function appStateLoadedAction(data) {
    return {
        type: APP_STATE_LOADED,
        payload: data
    }
}
export function appStateFailAction(data) {
    return {
        type: APP_STATE_FAIL,
        payload: data
    }
}

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

export function reportsGetStatsByYearLoadingAction(data) {
    return {
        type: REPORST_GET_STATS_BY_YEAR_LOADING,
        payload: data
    }
}
export function reportsGetStatsByYearLoadedAction(data) {
    return {
        type: REPORST_GET_STATS_BY_YEAR_LOADED,
        payload: data
    }
}
export function reportsGetStatsByYearFailAction(data) {
    return {
        type: REPORST_GET_STATS_BY_YEAR_FAIL,
        payload: data
    }
}

export function activeReportLoadingAction(data) {
    return {
        type: ACTIVE_REPORT_LOADING,
        payload: data
    }
}
export function activeReportLoadedAction(data) {
    return {
        type: ACTIVE_REPORT_LOADED,
        payload: data
    }
}
export function activeReportFailAction(data) {
    return {
        type: ACTIVE_REPORT_FAIL,
        payload: data
    }
}