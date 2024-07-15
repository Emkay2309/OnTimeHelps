import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StyleSheet,Text,} from 'react-native';
import AppNavigator from './src/navigators/AppNavigator';

function App(): React.JSX.Element {
  
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  
});

export default App;
