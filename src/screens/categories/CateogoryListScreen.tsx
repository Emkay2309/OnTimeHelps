import React from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useGetProductByCategoryQuery } from '../../redux/apis/api';
import { dataArray } from '../categories/cards';
import { ProductType } from '../../redux/apis/type';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, cart } from '../../redux/slicers/cartSlice';
import {styles} from './categoryListStyle'


type CategoryListScreenProps = {
    route: RouteProp<{ params: { categoryId: number } }, 'params'>;
};

const CategoryListScreen: React.FC<CategoryListScreenProps> = ({ route }) => {
    const navigation = useNavigation<NavigationProp<any>>();
    const { categoryId } = route.params;

    const dispatch = useDispatch();

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

    const handleAddProduct = (product: ProductType) => {
        dispatch(addToCart(product));
        navigation.navigate('Cart', { product: product });
        
    }

    // const handleShare = async () => {
    //     const shareResponse = await Share.open(options);
        
    // }

    return (
        <View style={styles.container}>
            <View><Text style={styles.title}>{dataArray[categoryId - 1]}</Text></View>
            <View style={{flex:1,}}>
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
                                <TouchableOpacity style={styles.btn} onPress={()=>handleAddProduct(item)}>
                                    <Text style={styles.btnText}>Add to cart</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btn} onPress={()=>{}}>
                                    <Text style={styles.btnText}>Share</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
            </View>
        </View>
    );
};

export default CategoryListScreen;
