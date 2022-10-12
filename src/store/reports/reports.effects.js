import {
    reportsGetAllDataLoadingAction,
    reportsGetAllDataLoadedAction,
    reportsGetAllDataFailAction,
    reportsGetByMonthLoadingAction,
    reportsGetByMonthLoadedAction,
    reportsGetByMonthFailAction,
    reportsCreateLoadingAction,
    reportsCreateLoadedAction,
    reportsCreateFailAction,
    reportsGetMinYearLoadingAction,
    reportsGetMinYearLoadedAction,
    reportsGetMinYeareFailAction
} from './reports.actions';

import { Realm } from "@realm/react";
import { Reports } from './models/Reports';
import * as ReportsService from './reports.service'
import moment from 'moment';


export async function doReportsGetAppData(dispatch, realm, params) {
    try {
        dispatch(reportsGetAllDataLoadingAction(params));
        const reports = await ReportsService.getAllReports(realm);
        dispatch(reportsGetAllDataLoadedAction(reports));
    } catch (err) { 
        dispatch(reportsGetAllDataFailAction(err))
    }
}

export async function doReportsGetByMonth(dispatch, realm, params) {
    try {
        dispatch(reportsGetByMonthLoadingAction(params));
        const reports = await ReportsService.getAllReportsByMonth(realm, params);
        dispatch(reportsGetByMonthLoadedAction(reports));
    } catch (err) {
        dispatch(reportsGetByMonthFailAction(err))
    }
}

export async function doReportsCreate(dispatch, realm, params) {
    try {
        dispatch(reportsCreateLoadingAction(params));
        const newReport = await ReportsService.addReport(realm, params);
        dispatch(reportsCreateLoadedAction(newReport));
    } catch (err) {
        dispatch(reportsCreateFailAction(err))
    }
}

export async function doReportsGetMinYear(dispatch, realm) {
    try {
        dispatch(reportsGetMinYearLoadingAction({}));
        const year = await ReportsService.getMinYear(realm);
        dispatch(reportsGetMinYearLoadedAction(year));
    } catch (err) {
        dispatch(reportsGetMinYeareFailAction(err))
    }
}