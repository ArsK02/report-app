import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, ScrollView, Button, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { ReportsRealmContext } from '../../store/reports/models/index';

import { doReportsGetByMonth } from '../../store/reports/reports.effects';

import { MonthReportHeader } from '../../components/month-report/MonthReportHeader';
import { MonthReportItem } from '../../components/month-report/MonthReportItem';

const { useRealm } = ReportsRealmContext;


export const MonthReportScreen = ({ route, navigation }) => {

    const { year, month } = route.params;
    const dispatch = useDispatch();
    const realm = useRealm();

    const reportsGetByMonthData = useSelector(state => state.reports.reportsGetByMonthData);
    const reportsGetByMonthLoading = useSelector(state => state.reports.reportsGetByMonthLoading);
    const reportsGetByMonthLoaded = useSelector(state => state.reports.reportsGetByMonthLoaded);

    const DATA = [
        {
            id: 0,
            date: '28 de septiembre',
            items: [
                {
                    id: 0,
                    title: 'Predico con Alex'
                },
                {
                    id: 1,
                    title: 'Predico con Laura'
                }
            ]
        },
        {
            id: 1,
            date: '11 de septiembre',
            items: [
                {
                    id: 0,
                    title: 'Salida con la congregacion'
                }
            ]
        },
        {
            id: 2,
            date: '7 de septiembre',
            items: [
                {
                    id: 0,
                    title: 'Predico con Steven'
                },
                {
                    id: 1,
                    title: 'Por la calle'
                },
                {
                    id: 2,
                    title: 'Estudio'
                },
                {
                    id: 3,
                    title: '2 horas'
                }
            ]
        }
    ]

    useEffect(() => {
        doReportsGetByMonth(dispatch, realm, { year: year, month: month});
    }, []);

    useEffect(() => {
        if (reportsGetByMonthLoaded) {
            // console.log('reportsGetByMonthData -> ', reportsGetByMonthData);
        }
    }, [reportsGetByMonthLoaded]);
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
                    renderItem={({item}) => <MonthReportItem item={item}/>}
                    keyExtractor={item => item.day}
                    key={item => item.day}
                />
            :
                <Text>Not Found</Text>
            }
        </>
        
    );
}



const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: '#ffffff',
    },
});
