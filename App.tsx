import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, } from 'react-native';
import AppNavigator from './src/navigators/AppNavigator';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

});

export default App;
