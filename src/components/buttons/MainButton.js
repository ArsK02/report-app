import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { THEME } from '../../theme';

const MainButton = ({ icon, onPress, text, style }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, style]}
            activeOpacity={0.7}
        >
            {!!icon && <Icon name={icon} size={38} color={THEME.ACCENT_COLOR} />}
            {!!text && <Text style={styles.text}>{text}</Text>}
        </TouchableOpacity>
    )
}

export default MainButton

const styles = StyleSheet.create({
    button: {
        flexGrow: 1,
        height: 54,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: THEME.SECONDARY_BACKGROUND_COLOR,
    },
    text: {
        fontSize: 18,
    },
})