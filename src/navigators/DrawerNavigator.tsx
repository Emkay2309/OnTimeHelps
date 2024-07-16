import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/home';
import CartScreen from '../screens/cart';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name='Home' component={HomeScreen} />
      <Drawer.Screen name='Cart' component={CartScreen} />
      <Drawer.Screen name='Tab' component={TabNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator

