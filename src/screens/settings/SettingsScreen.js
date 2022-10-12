import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenSafeAreaContainer from '../../components/ScreenSafeAreaContainer';
import { THEME } from '../../theme';


export const SettingsScreen = ({ }) => {
    return (
        <ScreenSafeAreaContainer style={styles.screenContainer}>
            <Text style={styles.title}>Ajustes</Text>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>123</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>123</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>123</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>123</Text>
                </View>
            </View>
        </ScreenSafeAreaContainer>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: '#ffffff',
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        // paddingLeft: 20,
        // paddingRight: 20
    },
    buttonContainer: {
        width: '50%',
        
    },
    text: {
       margin: 20,
       backgroundColor: 'red'
    },
    title: {
        fontSize: 49
    }
})