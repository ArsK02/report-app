import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { THEME } from '../../theme'

const StopWatchButton = ({ onPress, buttonStyle }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, buttonStyle]}
            activeOpacity={0.7}
        >
            <Icon name='stopwatch-outline' size={33} color={THEME.BACKGROUND_COLOR} />
        </TouchableOpacity>
    )
}

export default StopWatchButton

const styles = StyleSheet.create({
    button: {
        width: 54,
        height: 54,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: THEME.GREEN_COLOR,
    },
})