import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.imageContainer} onPress={()=>{} }>
            <Image source={require('../../assets/images/Home/menu1.png')} style={styles.img}/>
        </TouchableOpacity >
        <Text>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 20
    },
    imageContainer : {
        height : 40,
        width : 40,
        
        justifyContent : 'center',
        alignItems : 'center'
    },
    img : {
        height : 30,
        width : 30,
        borderRadius : 50,
    }
})