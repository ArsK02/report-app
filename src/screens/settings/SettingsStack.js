import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SettingsScreen } from './SettingsScreen';
import BackupScreen from './BackupScreen';
import { HeaderBackButton } from '../../components/buttons/HeaderBackButton';
import DonationScreen from './DonationScreen';
import PrivacyPolicyScreen from './PrivacyPolicyScreen';

const Stack = createNativeStackNavigator();

export const SettingsStack = ({ navigation }) => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerShadowVisible: false,
            }}
        >
            <Stack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
            />
            <Stack.Screen
                name="BackupScreen"
                component={BackupScreen}
                options={{
                    headerShown: true,
                    title: '',
                    headerLeft: () => <HeaderBackButton navigation={navigation} onPress={() => navigation.navigate('SettingsScreen')} />
                }}
            />
            <Stack.Screen
                name="DonationScreen"
                component={DonationScreen}
                options={{
                    headerShown: true,
                    title: '',
                    headerLeft: () => <HeaderBackButton navigation={navigation} onPress={() => navigation.navigate('SettingsScreen')} />
                }}
            />
            <Stack.Screen
                name="PrivacyPolicyScreen"
                component={PrivacyPolicyScreen}
                options={{
                    headerShown: true,
                    title: '',
                    headerLeft: () => <HeaderBackButton navigation={navigation} onPress={() => navigation.navigate('SettingsScreen')} />,
                    presentation: 'modal'
                }}
            />
        </Stack.Navigator>
    );
}