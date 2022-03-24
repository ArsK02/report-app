import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { HomeStack } from '../screens/home/HomeStack';
import { SettingsStack } from '../screens/settings/SettingsStack';
import { THEME } from '../theme';

const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const AppNavigation = () => {

    return (
        <SafeAreaProvider>
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
        </SafeAreaProvider>
    );
}

export const MainTabs = () => {

    const CustomTabBarButton = ({ children, onPress }) => (
        <TouchableOpacity
            onPress={onPress}
            style={styles.customTabBarButton}
            activeOpacity={1}
        >
            {children}
        </TouchableOpacity>
    );
    const TabBarButtonIcon = ({ focused, iconName }) => (
        <View style={[styles.tabBarButtonIcon, focused && styles.tabBarButtonIconActive]}>
            <Icon name={iconName || 'alert'} size={23} color={focused ? THEME.ACCENT_COLOR : THEME.BACKGROUND_COLOR} />
        </View>
    );

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                lazy: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Settings') {
                        iconName = 'cog';
                    }
                    return <TabBarButtonIcon focused={focused} iconName={iconName} />;
                },
                tabBarButton: props => <CustomTabBarButton {...props} />,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: THEME.ACCENT_COLOR,
                    borderRadius: 10,
                    height: 58,
                    paddingVertical: 8,
                    paddingHorizontal: 8,
                },
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
                name="Settings"
                component={SettingsStack}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    customTabBarButton: {
        flexGrow: 1,
        height: 42,
        borderRadius: 8,
        overflow: 'hidden',
    },

    tabBarButtonIcon: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarButtonIconActive: {
        backgroundColor: THEME.BACKGROUND_COLOR,
    },
});