import { configureStore } from '@reduxjs/toolkit';
import { myApi } from '../apis/api';

const store = configureStore({
  reducer: {
    [myApi.reducerPath] : myApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});

export default store;
