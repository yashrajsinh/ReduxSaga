/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import LogInScreen from './src/screens/LogInScreen';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF8F0' }}>
        <LogInScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
