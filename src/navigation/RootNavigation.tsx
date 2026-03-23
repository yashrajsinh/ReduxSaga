import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screen
import LogInScreen from '../screens/LogInScreen';
import TabNavigation from './TabNavigation';
//Redux selector
import { useSelector } from 'react-redux';

export type RootNavigationParam = {
  LogIn: undefined;
  Welcome: undefined;
};

const Stack = createNativeStackNavigator<RootNavigationParam>();
export default function RootNavigation() {
  //Selector
  const name = useSelector(state => state.name);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!name ? (
        <Stack.Screen name="LogIn" component={LogInScreen} />
      ) : (
        <Stack.Screen name="Welcome" component={TabNavigation} />
      )}
    </Stack.Navigator>
  );
}
