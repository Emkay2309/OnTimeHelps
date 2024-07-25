import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LoginType } from "../../screens/login/Logins";

export const signInUser = createAsyncThunk(
    'auth/signInUser',
    async (user:LoginType , thunkAPI) => {
      var formData = new FormData();
      formData.append('email', user.email);
      formData.append('password', user.password);
      try {
        const response = await axios.post('http://staging.php-dev.in:8844/trainingapp/api/users/login', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('signin sucess')
  
        return response.data;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
      }
    },
  );