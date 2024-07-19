import { configureStore } from '@reduxjs/toolkit';
import { myApi } from '../apis/api';
import cartSlice from '../slicers/cartSlice';
import { countSlice } from '../slicers/countSlicer';

const store = configureStore({
  reducer: {
    [myApi.reducerPath] : myApi.reducer,
    cart : cartSlice,
    counter : countSlice.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
