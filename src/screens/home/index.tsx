import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CategoryCard from '../categories/cards';
import Carasoul from './carousols';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/header/Header';
import LinearGradient from 'react-native-linear-gradient';


const HomeScreen = () => {
  return (
    <SafeAreaView style={[{ flex: 1, justifyContent: 'center', alignItems: 'center' },]}>
      <LinearGradient colors={['#613338', '#613338', '#3D2749']} style={styles.gradient}>

      <View style={styles.header}>
        <Header />
        <View style={{}}>
          <Text style={{ fontSize: 40 }}>HomeScreen</Text>
        </View>

        <TouchableOpacity>
          <FontAwesome name='search' size={30} style={{     marginTop: 14, marginLeft: 30}} />
        </TouchableOpacity>
      </View>
      <Carasoul />
      <CategoryCard />
      </LinearGradient>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor : 'red'
  },
  header: {
    flexDirection: 'row',
    
  },
  gradient : {
    
  }
})