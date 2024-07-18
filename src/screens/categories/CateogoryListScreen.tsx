import React from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useGetProductByCategoryQuery } from '../../redux/apis/api';
import { dataArray } from '../categories/cards';
import { ProductType } from '../../redux/apis/type';

type CategoryListScreenProps = {
    route: RouteProp<{ params: { categoryId: number } }, 'params'>;
};

const CategoryListScreen: React.FC<CategoryListScreenProps> = ({ route }) => {
    const navigation = useNavigation<NavigationProp<any>>();
    const { categoryId } = route.params;

    const { data, error, isLoading } = useGetProductByCategoryQuery(categoryId);

    if (isLoading) return <ActivityIndicator size="large" color="#0000ff" style={styles.indicator} />;
    if (error) return <Text>Error loading products.</Text>;

    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <AntDesign
                    key={i}
                    name={i < rating ? 'star' : 'staro'}
                    size={16}
                    color="#FFD700"
                />
            );
        }
        return stars;
    };

    const handleQuery = (item : ProductType) => {
        console.log(item);
        navigation.navigate('ProductScreen',{product:item});
    };

    return (
        <View style={styles.container}>
            <View><Text style={styles.title}>{dataArray[categoryId - 1]}</Text></View>
            <FlatList
                data={data?.data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleQuery(item)}>
                        <View style={styles.itemContainer}>
                            <Image source={{ uri: item.product_images }} style={styles.image} />
                            <View style={styles.infoContainer}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.producer}>{item.producer}</Text>
                                <Text style={styles.cost}>${item.cost}</Text>
                                <View style={styles.ratingContainer}>
                                    {renderStars(item.rating)}
                                </View>
                                <TouchableOpacity style={styles.btn}>
                                    <Text style={styles.btnText}>Add to cart</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        padding: 16,
        textAlign: 'center',
        backgroundColor: '#fff',
    },
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    indicator: {
        fontSize: 30,
        color: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop : '80%'
    },
    image: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        margin: 15,
        resizeMode : 'cover'
    },
    infoContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    producer: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    cost: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
    },
    ratingContainer: {
        flexDirection: 'row',
    },
    btn: {
        backgroundColor: 'lightpink',
        padding: 5,
        borderRadius: 4,
        width: 100,
        marginTop: 10
    },
    btnText: {
        fontWeight: '500',
        textAlign: 'center',
    },
});

export default CategoryListScreen;
