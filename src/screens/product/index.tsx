import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { RootStackParamList } from '../../navigators/AppNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ProductType } from '../../redux/apis/type';

const { height } = Dimensions.get('window');

const ProductScreen = ({ route }: StackScreenProps<RootStackParamList, 'ProductScreen'>) => {

  const navigation = useNavigation<NavigationProp<any>>();

  const { product } = route.params;

  const handleAddCart = (product : ProductType) => {
    console.log(product);
    navigation.navigate('ProductScreen',{product:product});
};

  console.log('hhh---->', product);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Image
        style={[styles.image, { height: height / 2 }]}
        source={{ uri: product.product_images }}
      />

      <Text style={styles.price}>$ {product.cost}</Text>
      <TouchableOpacity style={styles.btn}
        onPress={()=>handleAddCart(product)}
      
      >
        <Text style={styles.btnText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,

  },
  image: {
    width: '100%',
    marginBottom: 20
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',

  },
  price: {
    fontSize: 18,
    fontWeight: '500',
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
