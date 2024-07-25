import React, { FC, useState } from "react";
import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SignupScreenProps } from "./types";
import { useAppDispatch } from "../../redux/store/type";
import { registerUser } from "../../redux/slicers/authslicer/actions";
import LinearGradient from "react-native-linear-gradient";
import InputBox from "../../components/Inputbox";


const Signup: FC<SignupScreenProps> = ({ navigation }) => {
    const [user, setUser] = useState({
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@gmail.com',
        password: 'Abcd@1234',
        confirm_password: 'Abcd@1234',
        gender: 'M',
        phone_no: '9123456789',
    });

    const [selectedGender, setSelectedGender] = useState<'male' | 'female'>('male');
    const dispatch = useAppDispatch();
    const handleclick = async () => {
        await dispatch(registerUser(user)).unwrap();
        navigation.navigate("Logins");
    };


    return (
        <SafeAreaView style={styles.maincontainer}>
            <LinearGradient
                colors={['#613338', '#613338', '#3D2749']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
            >
                <KeyboardAvoidingView behavior={'padding'}>
                    <ScrollView contentContainerStyle={styles.scrollView}>
                        <View style={styles.pcontainer} >
                            <Text style={styles.container}>Sign up</Text>
                            <Text style={styles.cred}>Create your account</Text>
                            <InputBox icon="email" placeholder="First Name" label={undefined} />
                            <InputBox icon="email" placeholder="Last Name" label={undefined} />
                            <InputBox icon="email" placeholder="Email" label={undefined} />
                            <InputBox icon="lock" placeholder="Password" label={undefined} isPassword={true} />
                            <InputBox icon="lock" placeholder="Confirm Password" label={undefined} isPassword={true} />
                            <View style={styles.genderContainer}>
                                <TouchableOpacity
                                    style={styles.radioButton}
                                    onPress={() => setSelectedGender('male')}
                                >
                                    <View style={styles.radioCircle}>
                                        {selectedGender === 'male' && <View style={styles.selectedRb} />}
                                    </View>
                                    <Text style={styles.radioText}>Male</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.radioButton}
                                    onPress={() => setSelectedGender('female')}
                                >
                                    <View style={styles.radioCircle}>
                                        {selectedGender === 'female' && <View style={styles.selectedRb} />}
                                    </View>
                                    <Text style={styles.radioText}>Female</Text>
                                </TouchableOpacity>
                            </View>
                            <InputBox icon="email" placeholder="Phone Number" label={undefined} />

                            <TouchableOpacity onPress={()=>{}} style={styles.logincontainer}>
                                <Text style={styles.logintxt}>Signup</Text>
                            </TouchableOpacity>

                            <Text>Already have an account</Text>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </LinearGradient>
        </SafeAreaView>
    )

}

export default Signup

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
    },
    gradient: {
        flex: 1,
    },
    scrollView: {
        justifyContent: 'center',
        marginLeft: 30,
    },
    pcontainer: {
        alignContent: 'center',
    },
    container: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
    },
    cred: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#898989',
        marginTop: '2%'
    },
    genderContainer: {
        flexDirection: 'row',
        marginLeft: 30,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 30,
        borderRadius: 10,
        height: 40,
        width: 100,
        borderColor: 'black',
        borderWidth: 1,
        alignContent: 'center',
        backgroundColor: '#574c5c',
        marginTop: 10
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ff6f91',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    selectedRb: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ff6f91',

    },
    radioText: {
        fontSize: 16,
        color: '#ffffff',

    },
    logincontainer: {
        width: 300,
        backgroundColor: '#ba4f77',
        borderRadius: 20,
        marginTop: 10, 
        height: 50,
        justifyContent: 'center',
        marginLeft : 25,
        
    },
    logintxt: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },


});