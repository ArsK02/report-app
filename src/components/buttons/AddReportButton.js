import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { THEME } from '../../theme';

const AddReportButton = ({ onPress }) => {
    const insets = useSafeAreaInsets();

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, { bottom: insets.bottom + 70 }]}
            activeOpacity={0.7}
        >
            <Icon name='add' size={42} color={THEME.BACKGROUND_COLOR} />
        </TouchableOpacity>
    )
}

export default AddReportButton

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 0,
        right: 40,
        width: 64,
        height: 64,
        paddingLeft: 3,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.ACCENT_COLOR,
    },
})