import moment from "moment";

export const MOUNTH_DATA = [
    {
        id: 0,
        title: "Enero"
    },
    {
        id: 1,
        title: "Febrero"
    },
    {
        id: 2,
        title: "Marzo"
    },
    {
        id: 3,
        title: "Abril"
    },
    {
        id: 4,
        title: "Mayo"
    },
    {
        id: 5,
        title: "Junio"
    },
    {
        id: 6,
        title: "Julio"
    },
    {
        id: 7,
        title: "Agosto"
    },
    {
        id: 8,
        title: "Septiembre"
    },
    {
        id: 9,
        title: "Octubre"
    },
    {
        id: 10,
        title: "Noviembre"
    },
    {
        id: 11,
        title: "Diciembre"
    },
]

export const getMonthData = () => {
    return MOUNTH_DATA.slice(0, moment().month() + 1);
}
