import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenSafeAreaContainer from '../../components/ScreenSafeAreaContainer'

const DonationScreen = () => {
    return (
        <ScreenSafeAreaContainer disableSafeAreaEdges={['top']}>
            <Text>DonationScreen</Text>
        </ScreenSafeAreaContainer>
    )
}

export default DonationScreen

const styles = StyleSheet.create({})