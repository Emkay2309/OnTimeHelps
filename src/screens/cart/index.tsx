import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cart, decreaseItemQuantity, increaseItemQuantity, removeFromCart } from '../../redux/slicers/cartSlice';




const CartScreen = () => {
  const dispatch = useDispatch();

  const cartslice = useSelector(cart);
  const cartList = cartslice.cart;


  const handleAddProduct = (i: number) => {
    dispatch(increaseItemQuantity(i))
  }

  const handleDecProduct = (i : number) => {
    dispatch(decreaseItemQuantity(i));
  }

  const handleRemoveItem = (i : number) => {
    dispatch(removeFromCart(i));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>CartScreen</Text>

      <FlatList
        data={cartList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.product_images }} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.producer}>{item.producer}</Text>
              <Text style={styles.cost}>${item.cost}</Text>
              
              <View style={styles.btnsCon}>
                <TouchableOpacity style={styles.btn}
                  onPress={()=>handleDecProduct(item.id)}
                >
                  <Text style={styles.btnText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity style={styles.btn}
                  onPress={()=>handleAddProduct(item.id)}
                >
                  <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.removeItem}
                onPress={()=>handleRemoveItem(item.id)}
              >
                  <Text style={styles.btnText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
          
        )}
        
      />

    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    
  },
  titleText: {
    fontSize: 40,
    color: 'black'
  },
  cartList: {

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
    marginTop: '80%'
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    margin: 15,
    resizeMode: 'cover'
  },
  infoContainer: {
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
  btnsCon : {
    display:'flex' , 
    flexDirection : 'row'
  },
  quantity : {
    fontSize : 30,
    marginTop : 6,
    marginRight : 30,
    marginLeft : 30
  },
  btn: {
    backgroundColor: 'lightpink',
    padding: 5,
    borderRadius: 4,
    width: 50,
    marginTop: 10,
  },
  removeItem : {
    backgroundColor: 'lightpink',
    padding: 5,
    borderRadius: 10,
    width: 180,
    marginTop: 10,
  },
  btnText: {
    fontWeight: '700',
    textAlign: 'center',
    fontSize : 20
  },

})