import { createSlice } from '@reduxjs/toolkit';

const updateUserSlice = createSlice({
  name: 'updateUser',
  initialState: {
    onUpdateLoading: false,
    message: null,
    error: null,
  },

  reducers: {
    getUserLoading(state){
      state.onUpdateLoading = true;
    },
    onUpdateUserSuccess(state, action) {
      state.onUpdateLoading = false;
      state.message = action.payload;
    },
    onUpdateUserFailure(state, action) {
      state.onUpdateLoading = false;
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

export const updateUserAction = updateUserSlice.actions;
export default updateUserSlice;
