import {
    reportsGetAllDataLoadingAction,
    reportsGetAllDataLoadedAction,
    reportsGetAllDataFailAction
} from './reports.actions';

import { Realm } from "@realm/react";
import * as ReportsService from './reports.service'


export async function doReportsGetAppData(dispatch, realm, params) {
    try {
        dispatch(reportsGetAllDataLoadingAction(params));
        const reports = await ReportsService.getAllReports(realm);
        dispatch(reportsGetAllDataLoadedAction(reports));
        // realm.write(async () => {
        //     await realm.create("Report", {
        //         _id: new Realm.BSON.ObjectId(),
        //         title: "1233123",
        //       });
        // })
        console.log(reports)
    } catch (err) {
        dispatch(reportsGetAllDataFailAction(err))
    }
}