import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type CategoryCardProps = {
    navigation: NavigationProp<any>;
};

const data: string[] = ['Tables', 'Chairs', 'Sofas', 'Beds'];

const CategoryCard: React.FC<CategoryCardProps> = ({ navigation }) => {
    const handleQuery = (i: number) => {
        console.log(i + 1);
        navigation.navigate('CategoryListScreen', { categoryId: i + 1 });
    };

    return (
        <View style={styles.container}>
            {data.map((item, i) => (
                <TouchableOpacity
                    key={i}
                    style={styles.catContainer}
                    onPress={() => handleQuery(i + 1)}
                >
                    <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        height: 420,
    },
    catContainer: {
        backgroundColor: '#DD4A25',
        width: '48%',
        height: '48%',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    text: {
        textAlign: 'center',
        color: 'lightpink',
        fontSize: 16,
    },
});

export default CategoryCard;
