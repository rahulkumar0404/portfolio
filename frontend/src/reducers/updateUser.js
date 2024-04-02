import { createSlice } from '@reduxjs/toolkit';

const updateUserSlice = createSlice({
  name: 'updateUser',
  initialState: {
    onUpdateLoading: false,
    message: null,
    error: null,
  },

  reducers: {
    getUserLoading(state) {
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
    onTimelineLoading(state) {
      state.onUpdateLoading = true;
    },
    onUpdateTimelineSuccess(state, action) {
      state.onUpdateLoading = false;
      state.message = action.payload;
    },
    onUpdateTimelineFailure(state, action) {
      state.onUpdateLoading = false;
      state.error = action.payload;
    },
  },
});

export const updateUserAction = updateUserSlice.actions;
export default updateUserSlice;
