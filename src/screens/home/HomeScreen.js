import React, { useState, useRef, useMemo, useCallback } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { ReportsRealmContext } from '../../store/reports/models/index';
import { MonthsScroll } from '../../components/MonthsScroll';
import { MonthSummary } from '../../components/MonthSummary';
import { StopWatch } from '../../components/StopWatch';
import { BottomSheetModalComp } from '../../components/BottomSheetModalComp';
import ScreenSafeAreaContainer from '../../components/ScreenSafeAreaContainer';
import { THEME } from '../../theme';
import { doReportsGetAppData, doReportsCreate } from '../../store/reports/reports.effects';
import * as moment from 'moment';

import { MounthSlider } from '../../components/mounth-slider/MounthSlider';


const { useRealm } = ReportsRealmContext;

export const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const realm = useRealm();
    // console.log(+moment.utc());
    doReportsCreate(dispatch, realm, 'title');
    // doReportsGetAppData(dispatch, realm, {test: 1});
    // moment.locale('en')
    // const CURRENT_MONTH = moment().month();

    // const [selectedMonth, setSelectedMonth] = useState(CURRENT_MONTH);
    // console.log('selectedMonth: ', selectedMonth)

    // BottomSheetModal
    const bottomSheetModalRef = useRef(null);
    const snapPoints = useMemo(() => ['75%'], []);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    return (
        <ScreenSafeAreaContainer style={styles.screenContainer}>
            <MounthSlider></MounthSlider>
        </ScreenSafeAreaContainer>
    );
}

{/* <Button title='OpenModal' onPress={handlePresentModalPress} />
            <BottomSheetModalComp
                innerRef={bottomSheetModalRef}
                snapPoints={snapPoints}
            >
                <Text>Bottom Sheet</Text>
            </BottomSheetModalComp> */}

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: THEME.SECONDARY_BACKGROUND_COLOR,
    },
});