import moment from 'moment';

module.exports = {
    getUnixFromDateUTC: (date = null) => {
        if (date) {
            return moment.utc(date).valueOf()
        } else {
            return moment.utc().valueOf();
        };
    },
    getDateUTCFromUnix: (unix = null) => {
        return moment.unix(unix).format();
    },
    getDaysByMonthUTC: (month, year) => {
        return moment({ year: year, month: month}).daysInMonth();
    }
}