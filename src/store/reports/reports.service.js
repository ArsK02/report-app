import moment from 'moment';
import { Report } from './models/Reports';
import dateService from '../../utils/date';


export async function getAllReports (realm) {
    try {
        const reports = await realm.objects("Report");
        return reports;
    } catch (e) {
        console.log(e);
    }
}

export async function getAllReportsByMonth(realm, params) {
    try {
        const result = {
            year: params.year,
            month: params.month,
            data: []
        };
        
        const daysInMonth = moment({ year: params.year, month: params.month}).daysInMonth();

        const reports = await realm.objects("Report").sorted('date');
        console.log(reports);

        
        for (let i = 0; i < daysInMonth; i++) {
            const day = i + 1;
            const start = new Date(params.year, params.month, i, 24, 0, 0);
            const end = new Date(params.year, params.month, day, 24, 0, 0);
            const r = reports.filter(elem => {
                const d = new Date(elem.date);
                return d.getTime() >= start.getTime() && d.getTime() <= end.getTime();
            })
            if (r.length > 0) {
                result.data.push({
                    year: params.year,
                    month: params.month,
                    day: day,
                    start: start,
                    end: end,
                    data: r
                })
            }
        }
        return result;
    } catch (e) {
        console.log(e);
    }
}

export async function addReport (realm, params) {
    try {
        const result = await realm.write(async () => {
            return await realm.create('Report', Report.add(params.title, params.date, params.hours, params.minutes, params.publications, params.videos, params.returnVisits, params.bibleStudies));
        });
        return result;
    } catch (e) {
        console.log(e);
    }
}

export async function getMinYear (realm) {
    try {
        const years = [];
        const reports = await realm.objects("Report").sorted('date');
        if (reports.length > 0) {
            const year = moment().year();
            const minYear = new Date(reports[0].date).getFullYear();
            for (let index = 0; index < (year - minYear) + 1; index++) {
                years.push(year - index);
            }
        } else {
            years.push(moment().year())
        }
        return years;
    } catch (e) {
        console.log(e);
    }
}

