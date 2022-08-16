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

export async function addReport (realm) {
    try {
        realm.write(() => {
            realm.create('Report', Report.generate('Hola'));
        });
    } catch (e) {
        console.log(e);
    }
}