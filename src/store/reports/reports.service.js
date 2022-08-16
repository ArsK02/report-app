import Realm from 'realm';
import { Report } from './models/Reports';


export async function getAllReports (realm) {
    try {
        const reports = await realm.objects("Report");
        return reports;
    } catch (e) {
        console.log(e);
    }
}

export async function addReport (realm, title, dateStart, publications, videos, revisit, studies, completed) {
    try {
        realm.write(async () => {
            return await realm.create('Report', Report.add(title, dateStart, publications, videos, revisit, studies, completed));
        });
    } catch (e) {
        console.log(e);
    }
}