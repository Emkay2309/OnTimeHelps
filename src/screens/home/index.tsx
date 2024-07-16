import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 40 }}>HomeScreen</Text>
      <Button 
        onPress={() => {
          navigation.navigate('Draw');
        }} 
        title='Nav' color={'pink'} 
      />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

})