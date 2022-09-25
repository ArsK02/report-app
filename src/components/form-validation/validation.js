import * as yup from 'yup';

export const ReportSchema = yup.object().shape({
    title: yup
        .string(),
    date: yup
        .date()
        .required(),
    hours: yup
        .number(),
    minutes: yup
        .number()
        .max(55),
    publications: yup
        .number(),
    videos: yup
        .number(),
    returnVisits: yup
        .number(),
    bibleStudies: yup
        .number(),
});