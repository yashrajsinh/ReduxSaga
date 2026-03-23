import { View, Text } from 'react-native';
import React from 'react';
//nav
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import LogInScreen from '../screens/LogInScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

//types
export type RootStackParamList = {
  LogIn: undefined;
  Welcome: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LogIn" component={LogInScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}
