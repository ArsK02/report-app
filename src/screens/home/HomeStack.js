import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './HomeScreen';
import { HeaderBackButton } from '../../components/buttons/HeaderBackButton';
import { MonthReportScreen } from './MonthReportScreen';

const Stack = createNativeStackNavigator();

export const HomeStack = ({ navigation }) => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerShadowVisible: false,
                headerLeft: () => <HeaderBackButton navigation={navigation} />
            }}
        >
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />

            <Stack.Screen
                name="MonthReportScreen"
                component={MonthReportScreen}
                options={{
                    headerShown: true,
                    title: '',
                    presentation: 'modal'
                }}
            />
        </Stack.Navigator>
    );
}