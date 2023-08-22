import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';

interface AuthState {
  isAuth: boolean;
  user: IUser | null;
}

const initialState: AuthState = {
  isAuth: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.isAuth = false;
      state.user = null;
    },
  },
});

export const { setIsAuth, setUser, logout } = authSlice.actions;

export default authSlice.reducer;
