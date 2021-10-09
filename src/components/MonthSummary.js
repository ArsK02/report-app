import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const MonthSummary = ({}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.hours}>0h00</Text>

            <View>
                <Text style={styles.reportItemText}>Placements: 0</Text>
                <Text style={styles.reportItemText}>Video Showings: 0</Text>
                <Text style={styles.reportItemText}>Return visits: 0</Text>
                <Text style={styles.reportItemText}>Bible studies: 0</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderWidth: 1,
        borderColor: 'silver',
        borderRadius: 8
    },
    hours: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 24
    },
    reportItemText: {
        lineHeight: 22
    }
});