import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../screens/login';
import SignupScreen from '../screens/signup';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name='Login' component={LoginScreen} />
      <Drawer.Screen name='Signup' component={SignupScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator

