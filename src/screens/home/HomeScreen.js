import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment/min/moment-with-locales';

import { MonthsScroll } from '../../components/MonthsScroll';
import { MonthSummary } from '../../components/MonthSummary';
import { StopWatch } from '../../components/StopWatch';

export const HomeScreen = ({ }) => {
    moment.locale('en')
    const CURRENT_MONTH = moment().month();

    const [selectedMonth, setSelectedMonth] = useState(CURRENT_MONTH);
    console.log('selectedMonth: ', selectedMonth)

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.compContainer}>
                <MonthsScroll selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
            </View>
            
            <View style={styles.compContainer}>
                <MonthSummary />
            </View>
            
            <View style={styles.compContainer}>
                <StopWatch />
            </View>
        </ScrollView>
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