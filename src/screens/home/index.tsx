import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerNavigator from '../../navigators/DrawerNavigator'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex : 1 , justifyContent : 'center' , alignItems : 'center'}}>
      <Text style={{fontSize : 40}}>HomeScreen</Text>
      
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

})