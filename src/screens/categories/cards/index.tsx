import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { chairsIcon, sofasIcon, bedsIcon,tablesIcon } from '../../../assets/images/Home/icons'


export const dataArray: string [] = ['Tables', 'Chairs', 'Sofas', 'Beds'];

const images = [
    tablesIcon,
    chairsIcon,
    sofasIcon,
    bedsIcon,
];

const CategoryCard = () => {
    const navigation = useNavigation<NavigationProp<any>>();

    const handleQuery = (i : number) => {
        console.log(i );
        navigation.navigate('CategoryListScreen', { categoryId: i });
    };

    return (
        <View style={styles.container}>
            {dataArray.map((item, i) => (
                <TouchableOpacity
                    key={i}
                    style={styles.catContainer}
                    onPress={() => handleQuery(i + 1)}
                >
                    <ImageBackground source={images[i] } style={styles.image} imageStyle={{ borderRadius: 10 }}>
                        <View style={styles.overlay} />
                        {/* <Text style={styles.text}>{item}</Text> */}
                    </ImageBackground>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    catContainer: {
        width: '48%',
        height: 200,
        marginBottom: 10,
        borderRadius: 10,
        overflow: 'hidden',
        
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        position: 'absolute',
    },
});

export default CategoryCard;
