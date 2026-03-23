import { View, Text } from 'react-native';
import React from 'react';
//Tab nav
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Stack
import StackNavigation from './StackNavigation';
//Screens
import ProfileScreen from '../screens/ProfileScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
//types
export type TabParam = {
  WelcomeTab: undefined;
  ProfileTab: undefined;
};

const Tab = createBottomTabNavigator<TabParam>();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="WelcomeTab"
        component={WelcomeScreen}
        options={{ title: 'Welcome' }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
}
