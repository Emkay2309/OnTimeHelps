import React, { FC, useState } from "react";
import { Image, KeyboardAvoidingView, StyleSheet, Text, View, Alert, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LoginScreenProps } from "../types";
import InputBox from "../../../components/Inputbox/index";
import * as yup from 'yup';
import { Formik } from 'formik';
import LinearGradient from 'react-native-linear-gradient';
import { signInUser } from "../../../redux/slicers/authslicer/actions";
import { useAppDispatch } from "../../../redux/store/type";

export interface LoginType {
    email : string , 
    password : string
}

const Login: FC<LoginScreenProps> = ({ navigation }) => {

    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false);

    const handleLogin = async (values : LoginType ) => {
        setLoading(true);
        try {
            console.log(values);
            
            const response = await dispatch(signInUser(values)).unwrap();
            console.log('Login Successful:', response);

            if (response) {
                navigation.navigate('Home');
            } else {
                Alert.alert('Login Failed', 'Invalid credentials');
            }
        } catch (error) {
            console.log(error)
            Alert.alert('Error', 'Something went wrong. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleForget = () => {
        navigation.navigate('ForgotPassword' )
    }

    const validationSchema = yup.object({
        email: yup.string().required('Email is required').email('Enter a valid email'),
        password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
    });

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#613338', '#613338', '#3D2749']} style={styles.gradient}>
                <KeyboardAvoidingView behavior={'padding'} style={styles.keyboardView}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../../../assets/entry/login1.png')}
                            style={styles.image}
                        />
                    </View>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={handleLogin}
                        validationSchema={validationSchema}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <View style={styles.formContainer}>
                                <View style={styles.welcomeContainer}>
                                    <Text style={styles.welcomeText}>Welcome back!</Text>
                                    <Text style={styles.subText}>We have missed you</Text>
                                </View>
                                <View style={styles.inputWrapper}>
                                    <InputBox
                                        icon='email'
                                        label='Email'
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        error={touched.email && errors.email}
                                    />
                                    {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                                </View>
                                <View style={styles.inputWrapper}>
                                    <InputBox
                                        icon='lock'
                                        label='Password'
                                        secureTextEntry
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        error={touched.password && errors.password}
                                        isPassword={true}
                                    />
                                    {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
                                </View>
                                <TouchableOpacity onPress={handleForget}>
                                    <Text style={styles.frgttxt}>Forgot Password?</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>handleSubmit()} style={styles.logincontainer}>
                                    <Text style={styles.logintxt}>{loading ? 'Loading...' : 'Login'}</Text>
                                </TouchableOpacity>
                                <View style={styles.signuptxtcontainer}>
                                    <Text style={styles.accttxt}>Don't have an account?</Text>
                                    <Text onPress={() => navigation.navigate("Signup")} style={styles.signupLink}>Sign Up</Text>
                                </View>
                            </View>
                        )}
                    </Formik>
                </KeyboardAvoidingView>
            </LinearGradient>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    keyboardView: {
        flex: 1,
        width: '100%', 
    },
    imageContainer: {
        width: Dimensions.get('window').width,
        height: 200, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: Dimensions.get('window').width,
        height: '100%',
        resizeMode: 'cover', 
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', 
        paddingHorizontal: 15, 
    },
    welcomeContainer: {
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 35,
        fontWeight: '500',
        color: '#efefef',
    },
    subText: {
        fontWeight: '500',
        fontSize: 16,
        color: '#8c8a8c',
    },
    inputWrapper: {
        width: '100%',
        marginBottom: 90,
    },
    logincontainer: {
        width: 200,
        backgroundColor: '#ba4f77',
        borderRadius: 20,
        marginTop: 10, 
        height: 50,
        justifyContent: 'center',
    },
    logintxt: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    frgttxt: {
        alignSelf: 'center',
        marginTop: 20, // Space above the forgot password text
        fontSize: 18,
        fontWeight: 'bold',
        color: '#8c8a8c',

    },
    signuptxtcontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20, // Space above the signup text
    },
    accttxt: {
        fontSize: 18,
        color: '#767676',
        fontWeight: '500',
    },
    signupLink: {
        color: '#8c8a8c',
        fontWeight: 'bold',
        marginStart: 5,
        fontSize: 18,
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginTop: 5,
        alignSelf: 'center',
    },
    
});
