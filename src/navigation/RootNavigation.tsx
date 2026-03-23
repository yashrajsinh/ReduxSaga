import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screen
import LogInScreen from '../screens/LogInScreen';
import TabNavigation from './TabNavigation';

export type RootNavigationParam = {
  LogIn: undefined;
  Welcome: undefined;
};

const Stack = createNativeStackNavigator<RootNavigationParam>();
export default function RootNavigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // simple state, replace with real auth

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <Stack.Screen name="LogIn" component={LogInScreen} />
      ) : (
        <Stack.Screen name="Welcome" component={TabNavigation} />
      )}
    </Stack.Navigator>
  );
}
