import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './HomeScreen';

const Stack = createNativeStackNavigator();

export const HomeStack = ({ navigation }) => {

    return (
        <Stack.Navigator
            screenOptions={{
                //headerStyle: colorScheme === 'dark' ? DARK_HEADER_STYLE : HEADER_STYLE,
                // headerTitleStyle: colorScheme === 'dark' ? DARK_HEADER_TITLE_STYLE : HEADER_TITLE_STYLE,
                // headerTintColor: colorScheme === 'dark' ? 'white' : 'black',
                // cardShadowEnabled: false,
                // headerStatusBarHeight: 0,
                // headerBackTitleVisible: false,
                headerShadowVisible: false,
                // gestureEnabled: true,
                // headerStyle : {
                //     backgroundColor: activeTheme.BACKGROUND_COLOR
                // },
            }}
        >
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'ReportApp',
                    headerTitleAlign: 'center',
                }}
            />
        </Stack.Navigator>
    );
}