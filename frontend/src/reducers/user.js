import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    user: null,
    error: null,
  },

  reducers: {
    getUserRequest(state, action) {
      state.loading = true;
    },
    getUserSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
    },
    getUserFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    onClearError: (state) => {
      state.error = null;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
