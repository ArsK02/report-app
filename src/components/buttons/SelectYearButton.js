import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { THEME } from '../../theme';

const SelectYearButton = ({ onPress }) => {
    const insets = useSafeAreaInsets();

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
            activeOpacity={0.7}
        >
            <Text style={styles.text}>Año 2022</Text>
        </TouchableOpacity>
    )
}

export default SelectYearButton

const styles = StyleSheet.create({
    button: {
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 35,
        padding: 5,
    },
    text: {
        fontSize: 16
    }
})