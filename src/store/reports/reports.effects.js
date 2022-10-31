import {
    appStateLoadingAction,
    appStateLoadedAction,
    appStateFailAction,
    reportsGetAllDataLoadingAction,
    reportsGetAllDataLoadedAction,
    reportsGetAllDataFailAction,
    reportsGetByMonthLoadingAction,
    reportsGetByMonthLoadedAction,
    reportsGetByMonthFailAction,
    reportsCreateLoadingAction,
    reportsCreateLoadedAction,
    reportsCreateFailAction,
    reportsEditLoadingAction,
    reportsEditLoadedAction,
    reportsEditFailAction,
    reportsDeleteLoadingAction,
    reportsDeleteLoadedAction,
    reportsDeleteFailAction,
    reportsGetMinYearLoadingAction,
    reportsGetMinYearLoadedAction,
    reportsGetMinYeareFailAction,
    reportsGetStatsByYearLoadingAction,
    reportsGetStatsByYearLoadedAction,
    reportsGetStatsByYearFailAction,
    activeReportLoadingAction,
    activeReportLoadedAction,
    activeReportFailAction
} from './reports.actions';

import { Reports } from './models/Reports';
import * as ReportsService from './reports.service'
import moment from 'moment';

export async function doAppStateChange(dispatch, state) {
    try {
        dispatch(appStateLoadingAction(state));
        dispatch(appStateLoadedAction(state));
    } catch (err) { 
        dispatch(appStateFailAction(err))
    }
}

export async function doReportsGetAppData(dispatch, params) {
    try {
        dispatch(reportsGetAllDataLoadingAction(params));
        const reports = await ReportsService.getAllReports();
        dispatch(reportsGetAllDataLoadedAction(reports));
    } catch (err) { 
        dispatch(reportsGetAllDataFailAction(err))
    }
}

export async function doReportsGetByMonth(dispatch, params) {
    try {
        dispatch(reportsGetByMonthLoadingAction(params));
        const reports = await ReportsService.getAllReportsByMonth(params);
        dispatch(reportsGetByMonthLoadedAction(reports));
    } catch (err) {
        dispatch(reportsGetByMonthFailAction(err))
    }
}

export async function doReportsCreate(dispatch, params) {
    try {
        dispatch(reportsCreateLoadingAction(params));
        const newReport = await ReportsService.addReport(params);
        dispatch(reportsCreateLoadedAction(newReport));
    } catch (err) {
        dispatch(reportsCreateFailAction(err))
    }
}

export async function doReportsEdit(dispatch, params) {
    try {
        dispatch(reportsEditLoadingAction(params));
        const reportResult = await ReportsService.editReport(params);
        dispatch(reportsEditLoadedAction(reportResult));
    } catch (err) {
        dispatch(reportsEditFailAction(err))
    }
}

export async function doReportsDelete(dispatch, id) {
    try {
        dispatch(reportsDeleteLoadingAction(id));
        const result = await ReportsService.deleteReport(id);
        dispatch(reportsDeleteLoadedAction(result));
    } catch (err) {
        dispatch(reportsDeleteFailAction(err))
    }
}

export async function doReportsGetMinYear(dispatch) {
    try {
        dispatch(reportsGetMinYearLoadingAction({}));
        const year = await ReportsService.getMinYear();
        dispatch(reportsGetMinYearLoadedAction(year));
    } catch (err) {
        dispatch(reportsGetMinYeareFailAction(err))
    }
}

export async function doReportsGetStatsByYear(dispatch, year) {
    try {
        dispatch(reportsGetStatsByYearLoadingAction({}));
        const stats = await ReportsService.getStatsByYear(year);
        dispatch(reportsGetStatsByYearLoadedAction(stats));
    } catch (err) {
        dispatch(reportsGetStatsByYearFailAction(err))
    }
}

export async function doActiveReport(dispatch, params) {
    try {
        dispatch(activeReportLoadingAction({}));
        const stats = await ReportsService.getStatsByYear(params);
        dispatch(activeReportLoadedAction(stats));
    } catch (err) {
        dispatch(activeReportFailAction(err))
    }
}