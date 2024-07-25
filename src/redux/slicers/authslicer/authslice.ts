import { createSlice, nanoid} from '@reduxjs/toolkit';
import {IInitialState} from './type';

import {
  registerUser,
  signInUser,
  getUserAccountDetails,

} from './actions';

const initialState: IInitialState = {
  user: null,
  isLoading: false,
  isError: false,
  forgotPassData: null,
  changePassData: null,
  updateDetailsData: null,
  userAccountDetails: null,
  addressData: {addressList: [], lastSelectedAddressId: ''},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    selectAddress: (state, action) => {
      if (state.addressData?.lastSelectedAddressId) {
        state.addressData.lastSelectedAddressId = action.payload;
      }
    },
    addAddress: (state, action) => {
      const newAddress = {
        id: nanoid(),
        address: action.payload,
      };
      state.addressData?.addressList.push(newAddress as never);
      state.addressData.lastSelectedAddressId = newAddress.id;
    },

    deleteAddress: (state, action) => {
      if (state.addressData?.addressList) {
        state.addressData.addressList = state.addressData?.addressList.filter(
          item => item.id !== action.payload,
        );
      }
    },

    updateAddress: (state, action) => {
      if (state.addressData?.addressList) {
        state.addressData.addressList = state.addressData?.addressList.map(
          item => (item.id === action.payload.id ? action.payload : item),
        );
        state.addressData.lastSelectedAddressId = action.payload.id;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(signInUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getUserAccountDetails.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUserAccountDetails.fulfilled, (state, action) => {
        state.userAccountDetails = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getUserAccountDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      
  },
});
export default authSlice.reducer;
export const { selectAddress, addAddress, updateAddress, deleteAddress} =
  authSlice.actions;