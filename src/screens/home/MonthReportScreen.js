import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { ReportsRealmContext } from '../../store/reports/models/index';

import { doReportsGetByMonth } from '../../store/reports/reports.effects';

import { MonthReportHeader } from '../../components/month-report/MonthReportHeader';
import { MonthReportItem } from '../../components/month-report/MonthReportItem';
import ReportForm from '../../components/report-form/ReportForm';

const { useRealm } = ReportsRealmContext;


export const MonthReportScreen = ({ route, navigation }) => {

    const { year, month } = route.params;
    const dispatch = useDispatch();
    const realm = useRealm();

    const reportFormRef = useRef(null);
    const [reportFormDataEdit, setReportFromDataEdit] = useState(null);

    const reportsGetByMonthData = useSelector(state => state.reports.reportsGetByMonthData);
    const reportsGetByMonthLoading = useSelector(state => state.reports.reportsGetByMonthLoading);
    const reportsGetByMonthLoaded = useSelector(state => state.reports.reportsGetByMonthLoaded);

    const reportsEditData = useSelector(state => state.reports.reportsEditData);
    const reportsEditLoading = useSelector(state => state.reports.reportsEditLoading);
    const reportsEditLoaded = useSelector(state => state.reports.reportsEditLoaded);

    const reportsDeleteData = useSelector(state => state.reports.reportsDeleteData);
    const reportsDeleteLoading = useSelector(state => state.reports.reportsDeleteLoading);
    const reportsDeleteLoaded = useSelector(state => state.reports.reportsDeleteLoaded);

    useEffect(() => {
        doReportsGetByMonth(dispatch, realm, { year: year, month: month});
    }, []);

    useEffect(() => {
        if (reportsGetByMonthLoaded) {
            // console.log('reportsGetByMonthData -> ', reportsGetByMonthData);
        }
    }, [reportsGetByMonthLoaded]);

    useEffect(() => {
        if (reportsEditLoaded || reportsDeleteLoaded) {
            doReportsGetByMonth(dispatch, realm, { year: year, month: month});
        }
    }, [reportsEditLoaded, reportsDeleteLoaded])
    // doReportsCreate(dispatch, realm, 'title');
    // doReportsGetAppData(dispatch, realm, {test: 1});
    // moment.locale('en')
    // const CURRENT_MONTH = moment().month();

    // const [selectedMonth, setSelectedMonth] = useState(CURRENT_MONTH);
    // console.log('selectedMonth: ', selectedMonth)

    return (
        <>
            {!!reportsGetByMonthLoaded ?
                <FlatList
                    data={reportsGetByMonthData.data || []}
                    ListHeaderComponent={() => <MonthReportHeader month={reportsGetByMonthData.month}/>}
                    renderItem={({item}) => <MonthReportItem setReportFromData={setReportFromDataEdit} reportFormRef={reportFormRef} key={item.day} id={item._id}/>}
                    keyExtractor={item => item.day}
                    key={item => item.day}
                />
            :
                <Text>Not Found</Text>
            }
            <ReportForm reportData={reportFormDataEdit} ref={reportFormRef} addButton={false}/>
        </>
        
    );
}



const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: '#ffffff',
    },
});
