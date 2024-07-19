import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cart, decreaseItemQuantity, increaseItemQuantity, removeFromCart } from '../../redux/slicers/cartSlice';
import { styles } from './style';



const CartScreen = () => {
  const dispatch = useDispatch();

  const cartslice = useSelector(cart);
  const cartList = cartslice.cart;


  const handleAddProduct = (i: number) => {
    dispatch(increaseItemQuantity(i))
  }

  const handleDecProduct = (i: number) => {
    dispatch(decreaseItemQuantity(i));
  }

  const handleRemoveItem = (i: number) => {
    dispatch(removeFromCart(i));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>CartScreen</Text>
      <View style={{ flex: 1, marginBottom:5 }}>
        <FlatList
          data={cartList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.product_images }} style={styles.image} />
              <View style={styles.infoContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.producer}>{item.producer}</Text>
                <Text style={styles.cost}>${item.cost * item.quantity}</Text>

                <View style={styles.btnsCon}>
                  <TouchableOpacity style={styles.btn}
                    onPress={() => handleDecProduct(item.id)}
                  >
                    <Text style={styles.btnText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{item.quantity}</Text>
                  <TouchableOpacity style={styles.btn}
                    onPress={() => handleAddProduct(item.id)}
                  >
                    <Text style={styles.btnText}>+</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.removeItem}
                  onPress={() => handleRemoveItem(item.id)}
                >
                  <Text style={styles.btnText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>

          )}
        />
      </View>
      <View style={styles.cartDetailContainer}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Cart Details:</Text>
          <Text>Total Items: {cartslice.totalQuantity}</Text>
          <Text style={{ fontWeight: '600', fontSize: 15 }}>Total Price: $ {cartslice.totalPrice}</Text>
        </View>
        <TouchableOpacity style={styles.removeItem}
          onPress={() => { }}
        >
          <Text style={styles.btnText}>Buy Now</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default CartScreen
