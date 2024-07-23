import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

interface AddressType {
    name: string;
    address: string;
}

const arr: AddressType[] = [
    {
        name: 'alan',
        address: 'wje;fkhawihw72jsdnfks',
    },
    {
        name: 'bob',
        address: 'wje;fkhawihw72jsfks',
    },
    {
        name: 'carl',
        address: 'wje;fkhaw72jsdnfks',
    },
];

const AddressList = () => {
    const [selectedAddress, setSelectedAddress] = useState<string>('');

    const handlePress = (address: string) => {
        setSelectedAddress(address);
    };

    const renderItem = ({ item }: { item: AddressType }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => handlePress(item.address)}
        >
            <RadioButton
                value={item.address}
                status={selectedAddress === item.address ? 'checked' : 'unchecked'}
                onPress={() => handlePress(item.address)}
            />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.address}>{item.address}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Shipping Address</Text>
            <FlatList
                data={arr}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity style={styles.btn} onPress={() => {}}>
                <Text style={styles.btnText}>Add to cart</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddressList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333333',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    textContainer: {
        marginLeft: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
    },
    address: {
        fontSize: 14,
        color: '#777777',
    },
    btn: {
        backgroundColor: 'lightpink',
        padding: 5,
        borderRadius: 10,
        width: 300,
        height : 50,
        marginTop: 10,
        alignSelf : 'center',
        textAlign : 'center',
        justifyContent : 'center',
   
        
    },
    btnText: {
        fontWeight: '500',
        textAlign: 'center',
        fontSize : 20
    },
});
