import {  SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryCard from '../categories/cards';
import Carasoul from './carousols';

const HomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 40 }}>HomeScreen</Text>
      <Carasoul />
      <CategoryCard  />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  contianer : {

  },
})