import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenSafeAreaContainer from '../../components/ScreenSafeAreaContainer'

const BackupScreen = () => {
    return (
        <ScreenSafeAreaContainer disableSafeAreaEdges={['top']}>
            <Text>BackupScreen</Text>
        </ScreenSafeAreaContainer>
    )
}

export default BackupScreen

const styles = StyleSheet.create({})