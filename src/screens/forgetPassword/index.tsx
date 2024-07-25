import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigators/type'
import LinearGradient from 'react-native-linear-gradient'
import InputBox from '../../components/Inputbox'

const ForgetPassword = (navigation: StackNavigationProp<RootStackParamList, 'LogIn'>) => {

    const [checkPass, setCheckPass] = useState<boolean>(true);
    const handlePass = () => {
        
    }
    return (
        <View style={styles.container}>
            <LinearGradient 
                colors={['#613338', '#613338', '#3D2749']} 
                start={{ x: 0, y: 0 }} 
                end={{ x: 1, y: 1 }} 
                style={styles.gradient}
            >
                <Text style={styles.heading}>Forgot Password</Text>

                <View style={styles.inputWrapper}>
                    <InputBox
                        icon='email'
                        label='Email' 
                    />
                </View>

                <TouchableOpacity onPress={handlePass} style={styles.btn}>
                    <Text style={styles.btnText}>Reset</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View >
    )
}

export default ForgetPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        borderRadius: 5,
        borderColor: 'black',
        backgroundColor: 'yellow',
        width: 300,
        marginTop: 10,
        borderWidth: 2

    },
    heading: {
        fontSize: 30,
        fontWeight: '500',
        marginBottom : 10,
        color : 'white'
    },
    btn: {
        marginTop: 30,
        backgroundColor: 'lightpink',
        height: 45,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginTop: 5,
        alignSelf: 'center',
    },
    inputWrapper: {
        width: '100%',
        marginBottom: 80,
        marginLeft : 10
    },
    btnText : {
        fontWeight : '900',
        fontSize : 20
    }
})