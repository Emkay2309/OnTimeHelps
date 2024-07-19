import {  StyleSheet, Text, View, Dimensions, TouchableOpacity, Animated, Easing } from 'react-native';
import React from 'react';
import { RootStackParamList } from '../../navigators/AppNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ProductType } from '../../redux/apis/type';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} from '../../redux/slicers/cartSlice'

const { width, height } = Dimensions.get('screen');

const ProductScreen = ({ route }: StackScreenProps<RootStackParamList, 'ProductScreen'>) => {

  const dispatch = useDispatch();
  
  const navigation = useNavigation<NavigationProp<any>>();
  const translateYImage = new Animated.Value(40);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();
  const { product } = route.params;

  const handleAddCart = (product: ProductType) => {
    console.log(product);
    dispatch(addToCart(product));
    navigation.navigate('Cart', { product: product });
  };

  // const renderStars = (rating: number) => {
  //   const stars = [];
  //   for (let i = 0; i < 5; i++) {
  //     stars.push(
  //       <AntDesign
  //         key={i}
  //         name={i < rating ? 'star' : 'staro'}
  //         size={16}
  //         color="#FFD700"
  //       />
  //     );
  //   }
  //   return stars;
  // };

  console.log('hhh---->', product);
  return (
    <View style={styles.container}>
      <Animated.Image
        source={{ uri: product.product_images }}
        resizeMode="contain"
        style={[
          styles.image,{
            transform: [{
                translateY: translateYImage,
              },
            ],
          },
        ]}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>$ {product.cost}</Text>
        
        <TouchableOpacity style={styles.btn}
        onPress={() => handleAddCart(product)}
      >
        <Text style={styles.btnText}>Add to cart</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.star}>
        
      </View>
      
    </View>

  );
}

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
    padding: 10
  },
  image: {
    flex: 0.6,
    width: '100%',
  },
  content: {
    flex: 0.4,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 18,
    marginVertical: 12,
    color: '#333',
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
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
  star : {
    
  }
});