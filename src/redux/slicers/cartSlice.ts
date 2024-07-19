import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../apis/type'; // Adjust import path as necessary
import { RootState } from '../store/store';

interface CartItem extends ProductType {
  quantity : number;
}

interface CartState {
  cart : CartItem[];
  totalQuantity : number;
  totalPrice : number;
}

const initialState : CartState = {
  cart : [],
  totalQuantity : 0,
  totalPrice : 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action : PayloadAction<ProductType>) => {
      const { id } = action.payload;
      const existingItemIndex = state.cart.findIndex(item => item.id === id);

      if (existingItemIndex !== -1) {
        // Item already exists in cart
        state.cart[existingItemIndex].quantity += 1;
      } else {
        // New item added to cart
        state.cart.push({ ...action.payload, quantity: 1 });
      }

      // Update total quantity and price
      state.totalQuantity += 1;
      state.totalPrice += action.payload.cost; // Assuming cost is a property of ProductType
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const idToRemove = action.payload;
      const itemToRemoveIndex = state.cart.findIndex(item => item.id === idToRemove);

      if (itemToRemoveIndex !== -1) {
        const itemToRemove = state.cart[itemToRemoveIndex];
        state.totalQuantity -= itemToRemove.quantity;
        state.totalPrice -= itemToRemove.cost * itemToRemove.quantity;
        state.cart.splice(itemToRemoveIndex, 1); // Remove item from cart array
      }
    },

    increaseItemQuantity: (state, action: PayloadAction<number>) => {
      const idToIncrease = action.payload;
      const itemToIncrease = state.cart.find(item => item.id === idToIncrease);

      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += itemToIncrease.cost; // Adjust totalPrice based on item cost
      }
    },

    decreaseItemQuantity: (state, action: PayloadAction<number>) => {
      const idToDecrease = action.payload;
      const itemToDecrease = state.cart.find(item => item.id === idToDecrease);

      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= itemToDecrease.cost; // Adjust totalPrice based on item cost
      } else if (itemToDecrease && itemToDecrease.quantity === 1) {
        state.totalQuantity -= 1;
        state.totalPrice -= itemToDecrease.cost; // Adjust totalPrice based on item cost
        state.cart = state.cart.filter(item => item.id !== idToDecrease);
      }
    },

    clearCart: (state) => {
      state.cart = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export const cart = (state : RootState) => state.cart

export default cartSlice.reducer;
