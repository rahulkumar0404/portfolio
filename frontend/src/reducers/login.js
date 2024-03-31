import { createSlice } from '@reduxjs/toolkit';

const initialState  = {
    loading: false,
    isAuthenticated: false,
    message: null,
    user: null,
    error: null,
  }

const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    onLoginRequest: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    },

    onLoginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.message = action.payload;
    },

    onLoginFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.message = action.payload;
    },

    onLoginUserRequest: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },

    onLoginFailureRequest: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    onLogoutRequest: (state) => {
      state.loading = false;
    },

    onLogoutSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.message = action.payload;
    },

    onLogoutFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.message = action.payload;
    },
    onLoadUserRequest: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
    },

    onLoadUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },

    onLoadUserFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    onClearError: (state) => {
      state.error = null;
    },

    onClearMessage: (state) => {
      state.message = null;
    },
  },
});


export const loginActions = loginSlice.actions;
export default loginSlice;
