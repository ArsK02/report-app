import { React, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import ScreenSafeAreaContainer from '../../components/ScreenSafeAreaContainer';
import { THEME } from '../../theme';
import { expo } from '../../../app.json';
import { useTranslation } from "react-i18next";

import LanguageForm from '../../components/language/LanguageForm';

export const SettingsScreen = ({ navigation }) => {

    const languageFormRef = useRef(null);
    const { t, i18n } = useTranslation();

    const SettingsNavLink = ({ text, icon, screen, onPress }) => (
        <TouchableOpacity
            style={styles.navLink}
            onPress={() => {
                if (!!screen) {
                    navigation.navigate(screen)
                } else {
                    onPress();
                }
            }}
            activeOpacity={0.7}
        >
            <Icon name={icon} size={55} />
            <Text style={styles.navLinkText}>{t(text)}</Text>
        </TouchableOpacity>
    )

    return (
        <ScreenSafeAreaContainer tabsIndent style={styles.screenContainer}>
            <Text style={styles.title}>{t('Settings')}</Text>

            <View style={styles.buttonsGridContainer}>
                <View style={styles.buttonsRow}>
                    <SettingsNavLink text='Synchronization and backups' screen='BackupScreen' icon='cloud-upload-outline' />
                    <SettingsNavLink text='Languages' icon='language-outline' onPress={() => languageFormRef?.current.open()} />
                </View>
                <View style={styles.buttonsRow}>
                    <SettingsNavLink text='Appearance' icon='color-palette-outline' onPress={() => console.log('Aparencia')}/>
                    <SettingsNavLink text='Donations' screen='DonationScreen' icon='heart-outline' />
                </View>
            </View>

            <View style={styles.screenFooter}>
                <TouchableOpacity
                onPress={() => navigation.navigate('PrivacyPolicyScreen')}
                activeOpacity={0.7}
                >
                    <Text style={styles.screenFooterText}>{t('Privacy Policy')}</Text>
                </TouchableOpacity>

                <Text style={styles.screenFooterText}>{expo.version} ({Platform.OS === 'android' ? expo.android.versionCode : expo.ios.buildNumber})</Text>
            </View>
            <LanguageForm ref={languageFormRef}/>
        </ScreenSafeAreaContainer>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: THEME.BACKGROUND_COLOR,
        paddingHorizontal: 25,
        paddingTop: 30,
    },
    title: {
        marginBottom: 30,
        fontSize: 49,
        lineHeight: 58,
    },
    // GRID LAYOUT
    buttonsGridContainer: {
        height: Dimensions.get('window').width,
        marginHorizontal: -10,
    },
    buttonsRow: {
        flex: 1,
        flexDirection: 'row',
    },
    // SettingsNavLink
    navLink: {
        marginHorizontal: 10,
        marginBottom: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: THEME.SECONDARY_BACKGROUND_COLOR,
        borderRadius: 15,
    },
    navLinkText: {
        marginTop: 10,
        textAlign: 'center',
    },
    // ------ 
    screenFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto',
        paddingBottom: 25,
    },
    screenFooterText: {
        fontSize: 14, 
        lineHeight: 17,
        color: THEME.SECONDARY_TEXT_COLOR,
    },
})