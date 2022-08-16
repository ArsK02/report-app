import {
    reportsGetAllDataLoadingAction,
    reportsGetAllDataLoadedAction,
    reportsGetAllDataFailAction,
    reportsCreateLoadingAction,
    reportsCreateLoadedAction,
    reportsCreateFailAction
} from './reports.actions';

import { Realm } from "@realm/react";
import { Reports } from './models/Reports';
import * as ReportsService from './reports.service'
import moment from 'moment';


export async function doReportsGetAppData(dispatch, realm, limit, offset) {
    try {
        dispatch(reportsGetAllDataLoadingAction({limit: limit, offset: offset}));
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

export async function doReportsCreate(dispatch, realm, title, dateStart = +moment.utc(), publications = 0, videos = 0, revisit = 0, studies = 0, completed = false) {
    try {
        dispatch(reportsCreateLoadingAction({
            title: title,
            dateStart: dateStart,
            publications: publications,
            videos: videos,
            revisit: revisit,
            studies: studies,
            completed: completed
        }));
        const newReport = await ReportsService.addReport(realm, title, dateStart, publications, videos, revisit, studies, completed);
        dispatch(reportsCreateLoadedAction(newReport));
        // realm.write(async () => {
        //     await realm.create("Report", {
        //         _id: new Realm.BSON.ObjectId(),
        //         title: "1233123",
        //       });
        // })
        console.log(reports)
    } catch (err) {
        dispatch(reportsCreateFailAction(err))
    }
}