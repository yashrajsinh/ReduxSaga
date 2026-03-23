/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
//nav container
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';

//Redux
import { Provider } from 'react-redux';
import { store } from './src/store/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
