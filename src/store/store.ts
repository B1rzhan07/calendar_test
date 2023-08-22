import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import { userApi } from '../service/userApi';
import guestSlice from './slices/guestSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [userApi.reducerPath]: userApi.reducer,
    guest: guestSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
