import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Test: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSave = () => {
        // Handle save logic
        Alert.alert('Profile Saved', `Name: ${fullName}, Email: ${email}, Phone: ${phoneNumber}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.profileText}>Profile</Text>

            <TouchableOpacity style={styles.imageContainer}>
                <View style={{ alignItems: 'center', alignSelf: 'center' }}>
                    <AntDesign name="camerao" color='white' size={20}  />
                    <Text style={styles.editText}>Edit picture</Text>
                </View>
            </TouchableOpacity>

            <View style={{ flex: 1 }}>
                <Text style={styles.labelText}>Full Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Name"
                    placeholderTextColor='#D3D3D3'
                    value={fullName}
                    onChangeText={setFullName}
                />

                <Text style={styles.labelText}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ryan@abc.com"
                    placeholderTextColor='#D3D3D3'
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.labelText}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="9900787821"
                    placeholderTextColor='#D3D3D3'
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />
            </View>

            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Test

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',

    },
    profileText: {
        fontSize: 24,
        fontWeight: '900',
        marginVertical: 20,
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 20,
        backgroundColor: 'black',

    },
    profileImage: {
        width: '100%',
        height: '100%',
    },

    labelText: {
        fontWeight: '900'
    },
    editText: {
        fontSize: 16,
        color: '#fff',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ddd',
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    saveButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#007BFF',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})