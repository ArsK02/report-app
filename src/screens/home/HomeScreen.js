import React, { useState, useRef, useMemo, useCallback } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment/min/moment-with-locales';

import { MonthsScroll } from '../../components/MonthsScroll';
import { MonthSummary } from '../../components/MonthSummary';
import { StopWatch } from '../../components/StopWatch';
import { BottomSheetModalComp } from '../../components/BottomSheetModalComp';
import ScreenSafeAreaContainer from '../../components/ScreenSafeAreaContainer';

export const HomeScreen = ({ navigation }) => {
    moment.locale('en') 
    const CURRENT_MONTH = moment().month();

    const [selectedMonth, setSelectedMonth] = useState(CURRENT_MONTH);
    console.log('selectedMonth: ', selectedMonth)

    // BottomSheetModal
    const bottomSheetModalRef = useRef(null);
    const snapPoints = useMemo(() => ['75%'], []);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    return (
        <ScreenSafeAreaContainer>
            <View style={styles.compContainer}>
                <MonthsScroll selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
            </View>

            <Button title='OpenModal' onPress={handlePresentModalPress} />

            <View style={styles.compContainer}>
                <MonthSummary />
            </View>

            <BottomSheetModalComp
                innerRef={bottomSheetModalRef}
                snapPoints={snapPoints}
            >
                <Text>Bottom Sheet</Text>
            </BottomSheetModalComp>
        </ScreenSafeAreaContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    compContainer: {
        marginBottom: 25
    }
});