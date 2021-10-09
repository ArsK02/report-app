import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment/min/moment-with-locales';
import Icon from 'react-native-vector-icons/Ionicons';

export const MonthsScroll = ({ selectedMonth, setSelectedMonth }) => {
    moment.locale('en')
    const MONTHS = moment.months();

    const goToPrevMonth = () => {
        selectedMonth === 0 ? setSelectedMonth(12) : setSelectedMonth(selectedMonth - 1);
    }
    const goToNextMonth = () => {
        selectedMonth === 11 ? setSelectedMonth(0) : setSelectedMonth(selectedMonth + 1);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => goToPrevMonth()} style={styles.arrowButton}>
                <Icon name='chevron-back-outline' size={26} />
            </TouchableOpacity>

            <Text style={styles.monthText}>{MONTHS[selectedMonth]}</Text>

            <TouchableOpacity onPress={() => goToNextMonth()} style={styles.arrowButton}>
                <Icon name='chevron-forward-outline' size={26} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 40
    },
    arrowButton: {
        padding: 5
    },
    monthText: {
        fontSize: 18,
        lineHeight: 24
    }
});