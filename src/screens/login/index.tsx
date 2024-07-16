import React, { FC, useContext, useState } from "react";
import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LoginScreenProps } from "./types";
import InputBox from "../../components/Inputbox";
import * as yup from 'yup';
import { Formik } from 'formik';


const Login: FC<LoginScreenProps> = ({ navigation }) => {

    const [text, setText] = useState('')
    const handleclick = () => {
        navigation.navigate("Signup");

    };

    const handleLogin = () => {
        navigation.navigate('Tab')
        setText('');
        console.log('login btn clicked');
    }

    const validationSchema = yup.object({
        email: yup.string().required('email is required').email('Enter a valid email'),
        password: yup.string().required('password is required').min(6, 'Password must be at least 6 characters long'),
    });


    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={'padding'}>
                <ScrollView contentContainerStyle={styles.scrollView}>

                    <Formik 
                        initialValues={{email : '' , pasword : ''}}
                        onSubmit={(value)=>console.log(value)}
                        validationSchema={validationSchema}
                    >
                    <View style={styles.pcontainer} >
                        <Text style={styles.container}>NeoStore</Text>
                        {/* <Text style={styles.cred}>Enter Your Credential to login</Text> */}

                            <View>
                                <InputBox icon='email' label='Email' />
                            </View>
                            <View>
                                <InputBox icon='lock' label='Password' />
                            </View>

                        <TouchableOpacity onPress={handleLogin} style={styles.logincontainer}>
                            <Text style={styles.logintxt}>Login</Text>
                        </TouchableOpacity>
                        <Text style={styles.frgttxt}>Forgot Password?</Text>
                        <View style={styles.signuptxtcontainer} >
                            <Text style={styles.accttxt} >Dont have an account?</Text>
                            <Text onPress={handleclick} style={[styles.accttxt, { color: '#9B29B1', fontWeight: 'bold', marginStart: '3%' }]} >Sign Up</Text>
                        </View>

                        <Text style={[styles.accttxt, { color: '#9B29B1', fontWeight: 'bold', marginStart: '3%' }]} > { }</Text>
                    </View>
                    </Formik>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}



export default Login;

const styles = StyleSheet.create({
    pcontainer: {
        alignContent: 'center',
        marginTop: '35%',
        marginLeft : 18
    },
    container: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        flex: 1,
    },
    scrollView: {
        justifyContent: 'center',
    },
    cred: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#898989',
        marginTop: '2%'
    },
    username: {
        width: '80%',
        backgroundColor: '#F0E4F2',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: '10%',
        height: 50,
        justifyContent: 'center',
        padding: 4
    },
    pssd: {
        width: '80%',
        backgroundColor: '#F0E4F2',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: '3%',
        height: 50,
        justifyContent: 'center',
        padding: 4
    },
    logincontainer: {
        width: '75%',
        backgroundColor: '#9B29B1',
        borderRadius: 20,
        marginTop: '5%',
        alignSelf: "center",
        height: 50
    },
    logintxt: {
        textAlign: 'center',
        margin: 10, color: 'white',
        fontSize: 20, fontWeight: 'bold'
    },
    frgttxt: {
        alignSelf: 'center',
        marginTop: '10%',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#983DA7'
    },
    signuptxtcontainer: {
        width: '70%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '8%'
    },
    accttxt: {
        fontSize: 18,
        color: '#767676',
        fontWeight: '500'
    }


});