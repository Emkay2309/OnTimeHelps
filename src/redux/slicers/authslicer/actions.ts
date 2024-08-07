import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {baseUrl,register,signin,getUserData,} from '../../urls/url';
import {IRegistrationFormData,ISignInFormData,} from './type';
import Toast from 'react-native-simple-toast';
import { persistor } from '../../store/store';


export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (user: IRegistrationFormData, thunkAPI) => {
    var formData = new FormData();
    formData.append('first_name', user.first_name);
    formData.append('last_name', user.last_name);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('confirm_password', user.confirm_password);
    formData.append('gender', user.gender);
    formData.append('phone_no', Number(user.phone_no));
    try {
      const response = await axios.post(`${baseUrl}/${register}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      Toast.show('Registration successful', Toast.SHORT);
      return response.data;
    } catch (error: any) {
      Toast.show('try again', Toast.SHORT);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);



export const signInUser = createAsyncThunk(
  'auth/signInUser',
  async (user: ISignInFormData, thunkAPI) => {
    var formData = new FormData();
    formData.append('email', user.email);
    formData.append('password', user.password);
    try {
      const response = await axios.post(`${baseUrl}/${signin}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      Toast.show('sign in successful', Toast.SHORT);

      return response.data;
    } catch (error: any) {
      Toast.show('try again', Toast.SHORT);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);


export const getUserAccountDetails = createAsyncThunk(
  'auth/getUserAccountDetails',
  async (access_token: string | undefined, thunkAPI) => {
    const headers = {
      access_token: access_token,
    };
    try {
      const response = await axios.get(`${baseUrl}/${getUserData}`, {
        headers,
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);


