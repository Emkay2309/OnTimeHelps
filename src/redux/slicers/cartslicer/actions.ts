import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {
  baseUrl,
  getCart,
  addCart,
  editCartItem,
  deleteCartItem,
} from '../../urls/url';
import {GetCartListParamsType, AddToCartParamsType, DeleteCartParamsType} from './type';

/**
 * @author Meghraj Vilas Lot
 * @param {IGetCartListParams}
 * @description performs api call for fetching cart details
 * @returns cart data on success or error
 */
export const getCartList = createAsyncThunk(
  'cart/getCartList',
  async (params: GetCartListParamsType, thunkAPI) => {
    try {
      const headers = {
        access_token: params.access_token,
        'Content-Type': 'multipart/form-data',
      };
      const response = await axios.get(`${baseUrl}/${getCart}`, {
        headers,
      });

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);



export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (params: AddToCartParamsType, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('product_id', params.product_id);
      formData.append('quantity', params.quantity);
      const headers = {
        access_token: params.access_token, 
        'Content-Type': 'multipart/form-data', 
      };
      const response = await axios.post(`${baseUrl}/${addCart}`, formData, {
        headers,
      });

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);



export const editCart = createAsyncThunk(
  'cart/editCart',
  async (params: AddToCartParamsType, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('product_id', params.product_id);
      formData.append('quantity', params.quantity);
      const headers = {
        access_token: params.access_token,
        'Content-Type': 'multipart/form-data',
      };
      const response = await axios.post(
        `${baseUrl}/${editCartItem}`,
        formData,
        {
          headers,
        },
      );

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

/**
 * @author Meghraj Vilas Lot
 * @param {IDeleteCartParams}
 * @description performs api call for fetching deleting cart item
 * @returns all cart items data on success or error
 */

export const deleteCart = createAsyncThunk(
  'cart/deleteCart',
  async (params: DeleteCartParamsType, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('product_id', params.product_id);
      const headers = {
        access_token: params.access_token,
        'Content-Type': 'multipart/form-data',
      };
      const response = await axios.post(
        `${baseUrl}/${deleteCartItem}`,
        formData,
        {
          headers,
        },
      );

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);