import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Agenda } from 'react-native-calendars';

import { AgendaItem } from '../components/AgendaItem'

export const CalendarScreen = ({ }) => {
    let currentDate = new Date();
    const RenderItem = (item) => {
        return (
            <TouchableOpacity
                // style={[styles.item, { height: item.height }]} 
                //just to have some style
                onPress={() => Alert.alert(item.name)}
            >
                <Text>{item.name}</Text>
            </TouchableOpacity>
        );
    }
    return (
        <Agenda
            selected={currentDate}
            items={{
                '2021-10-20': [{ name: 'item 1 - any js object' }],
                '2021-10-23': [{ name: 'item 2 - any js object', height: 80 }],
                '2021-10-24': [],
                '2021-10-25': [{ name: 'item 3 - any js object' }],
            }}
            renderItem={() => <RenderItem />}
            showClosingKnob={true}
        />
    );
}