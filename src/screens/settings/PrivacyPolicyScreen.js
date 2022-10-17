import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTranslation } from "react-i18next";

const PrivacyPolicyScreen = () => {
    const { t, i18n } = useTranslation();
    return (
        <View>
            <Text>PrivacyPolicyScreen</Text>
        </View>
    )
}

export default PrivacyPolicyScreen

const styles = StyleSheet.create({})