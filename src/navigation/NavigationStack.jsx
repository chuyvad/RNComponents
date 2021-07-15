import React from 'react';

import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AlertsScreen } from '../screens/AlertsScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { PushToRefreshScreen } from '../screens/PushToRefreshScreen';
import { SectionListScreen } from '../screens/SectionListScreen';
import { TextInputScreen } from '../screens/TextInputScreen';

const Stack = createStackNavigator();

export const NavigationStack = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        cardStyle: {
                            backgroundColor: 'white',
                        },
                    }}
                >
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="AlertsScreen" component={AlertsScreen} />
                    <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
                    <Stack.Screen name="PushToRefreshScreen" component={PushToRefreshScreen} />
                    <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
                    <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
};
