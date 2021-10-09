import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { HomeStack } from '../screens/home/HomeStack';
import { CalendarScreen } from '../screens/CalendarScreen';
import { SettingsStack } from '../screens/settings/SettingsStack';

const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const AppNavigation = () => {

    return (
        <NavigationContainer theme={{
            ...DefaultTheme,
            colors: {
                ...DefaultTheme.colors,
                background: 'white'
            },
        }}>
            <MainStack.Navigator>
                <MainStack.Screen
                    name="MainNavigation"
                    component={MainTabs}
                    options={{ headerShown: false }}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}

export const MainTabs = () => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                lazy: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (route.name === 'Calendar') {
                        iconName = focused ? 'calendar' : 'calendar-outline'
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline'
                    } 
                    return <Icon name={iconName} size={22} />
                },
                tabBarShowLabel: false,
                //tabBarActiveTintColor: 'black',
                // tabBarInactiveTintColor: activeTheme.ICON_INACTIVE,
                // tabBarStyle : {
                //     backgroundColor: activeTheme.BACKGROUND_COLOR
                // }
                headerStyle: {
                    shadowOffset: null,
                    elevation: 0
                }
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Calendar"
                component={CalendarScreen}
                options={{ title: 'Calendar' }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsStack}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
}