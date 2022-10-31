import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, ScrollView, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import ScreenSafeAreaContainer from '../../components/ScreenSafeAreaContainer';
import { THEME } from '../../theme';
import { doReportsGetAppData, doReportsCreate } from '../../store/reports/reports.effects';
import * as moment from 'moment';
import AddReportButton from '../../components/buttons/AddReportButton';
import ReportForm from '../../components/report-form/ReportForm';

import { MonthSlider } from '../../components/month-slider/MonthSlider';

export const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    // console.log(+moment.utc());
    // doReportsCreate(dispatch, realm, 'title');
    // doReportsGetAppData(dispatch, realm, {test: 1});
    // moment.locale('en')
    // const CURRENT_MONTH = moment().month();

    // const [selectedMonth, setSelectedMonth] = useState(CURRENT_MONTH);
    // console.log('selectedMonth: ', selectedMonth)

    return (
        <ScreenSafeAreaContainer style={styles.screenContainer}>
            <MonthSlider navigation={navigation}/>
            <ReportForm/>
        </ScreenSafeAreaContainer>
    );
}



const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: THEME.SECONDARY_BACKGROUND_COLOR,
    },
});
