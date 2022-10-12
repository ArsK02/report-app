import * as React from 'react';
import { Dimensions, Text, View, StyleSheet, TouchableOpacity } from 'react-native';


export const MonthReportHeader = ({month}) => {
    return (
        <View
            style={styles.container}
        >
            <Text style={styles.text}>{month}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    },
    text: {
        fontSize: 49
    }
});