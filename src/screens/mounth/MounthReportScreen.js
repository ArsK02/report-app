import React, { useState, useRef, useMemo, useCallback } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, ScrollView, Button, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';

import { ReportsRealmContext } from '../../store/reports/models/index';

import { MounthReportHeader } from '../../components/mounth-report/MounthReportHeader';
import { MounthReportItem } from '../../components/mounth-report/MounthReportItem';

const { useRealm } = ReportsRealmContext;

export const MounthReportScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const realm = useRealm();
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
    // doReportsCreate(dispatch, realm, 'title');
    // doReportsGetAppData(dispatch, realm, {test: 1});
    // moment.locale('en')
    // const CURRENT_MONTH = moment().month();

    // const [selectedMonth, setSelectedMonth] = useState(CURRENT_MONTH);
    // console.log('selectedMonth: ', selectedMonth)

    return (
        <FlatList
                data={DATA || []}
                ListHeaderComponent={() => <MounthReportHeader title={'Septiembre'}/>}
                renderItem={({item}) => <MounthReportItem item={item}/>}
                keyExtractor={item => item.id}
            />
    );
}



const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: '#ffffff',
    },
});
