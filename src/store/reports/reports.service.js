import moment from 'moment';
import { Report } from './models/Reports';
import dateService from '../../utils/date';


export async function getAllReports() {
    try {
        // const reports = await realm.objects("Report");
        // return reports;
    } catch (e) {
        console.log(e);
    }
}

export async function getAllReportsByMonth(params) {
    try {
        // const result = {
        //     year: params.year,
        //     month: params.month,
        //     data: []
        // };
        
        // const daysInMonth = moment({ year: params.year, month: params.month}).daysInMonth();

        // const reports = await realm.objects("Report").sorted('date');

        
        // for (let i = 0; i < daysInMonth; i++) {
        //     const day = i + 1;
        //     const start = new Date(params.year, params.month, i, 24, 0, 0);
        //     const end = new Date(params.year, params.month, day, 24, 0, 0);
        //     const r = reports.filter(elem => {
        //         const d = new Date(elem.date);
        //         return d.getTime() >= start.getTime() && d.getTime() <= end.getTime();
        //     })
        //     if (r.length > 0) {
        //         result.data.push({
        //             year: params.year,
        //             month: params.month,
        //             day: day,
        //             start: start,
        //             end: end,
        //             data: r
        //         })
        //     }
        // }
        // return result;
    } catch (e) {
        console.log(e);
    }
}

export async function addReport (params) {
    try {
        // const result = await realm.write(async () => {
        //     return await realm.create('Report', Report.add(params.title, params.date, params.hours, params.minutes, params.publications, params.videos, params.returnVisits, params.bibleStudies));
        // });
        // return result;
    } catch (e) {
        console.log(e);
    }
}

export async function editReport(params) {
    try {
        // // console.log(params);
        // const reports = await realm.objects("Report");
        // // console.log(reports);
        // const result = await realm.write(async () => {
        //     reports.forEach(report => {
        //         if (report._id.toString() == params.id) {
        //             report.title = params.value.title;
        //             report.hours = params.value.hours;
        //             report.minutes = params.value.minutes;
        //             report.publications = params.value.publications;
        //             report.videos = params.value.videos;
        //             report.returnVisits = params.value.returnVisits;
        //             report.bibleStudies = params.value.bibleStudies;
        //         }
        //         return report;
        //     });
        //     // return await realm.create('Report', Report.add(params.title, params.date, params.hours, params.minutes, params.publications, params.videos, params.returnVisits, params.bibleStudies));
        // });
        // return result;
    } catch (e) {
        console.log(e);
    }
}

export async function deleteReport(id) {
    try {
        // // console.log(params);
        // const reports = await realm.objects("Report");
        // // console.log(reports);
        // const result = await realm.write(async () => {
        //     realm.delete(reports.filter(report => report._id.toString() == id));
        // });
        // return result;
    } catch (e) {
        console.log(e);
    }
}

export async function getMinYear () {
    try {
        // const years = [];
        // const reports = await realm.objects("Report").sorted('date');
        // if (reports.length > 0) {
        //     const year = moment().year();
        //     const minYear = new Date(reports[0].date).getFullYear();
        //     for (let index = 0; index < (year - minYear) + 1; index++) {
        //         years.push(year - index);
        //     }
        // } else {
        //     years.push(moment().year())
        // }
        // return years;
    } catch (e) {
        console.log(e);
    }
}

export async function getStatsByYear () {
    try {
        // const stats = {
        //     year: year,
        //     data: []
        // };
        // const monthInYear = 11;

        // const reports = await realm.objects("Report").sorted('date');

        // for (let index = 0; index < monthInYear + 1; index++) {
        //     const month = index;
        //     const start = new Date(year, month, 1, 1, 0, 0);
        //     const end = new Date(year, month + 1, 1, 0, 0, 0);

        //     const r = reports.filter(elem => {
        //         const d = new Date(elem.date);
        //         return d.getTime() >= start.getTime() && d.getTime() <= end.getTime();
        //     })


        //     if (r.length > 0) {
        //         let statHours = 0;
        //         let statMinutes = 0;
        //         let statPublications = 0;
        //         let statVideos = 0;
        //         let statReturnVisits = 0;
        //         let statbibleStudies = 0;
        //         r.forEach(elem => {
        //             statHours = statHours + elem.hours;
        //             statMinutes = statMinutes + elem.minutes;
        //             statPublications = statPublications + elem.publications;
        //             statVideos = statVideos + elem.videos;
        //             statReturnVisits = statReturnVisits + elem.returnVisits;

        //             if (elem.bibleStudies > statbibleStudies) {
        //                 statbibleStudies = elem.bibleStudies;
        //             }
        //         });

        //         if (statMinutes >= 60) {
        //             statHours = statHours + Math.trunc(statMinutes / 60);
        //             statMinutes = statMinutes % 60;
        //         }

        //         stats.data.push({
        //             year: year,
        //             month: month,
        //             start: start,
        //             end: end,
        //             data: r,
        //             stats: {
        //                 hours: statHours,
        //                 minutes: statMinutes,
        //                 publications: statPublications,
        //                 videos: statVideos,
        //                 returnVisits: statReturnVisits,
        //                 bibleStudies: statbibleStudies,
        //             }
        //         })
        //     }
        // }
        // return stats;
    } catch (e) {
        console.log(e);
    }
}


