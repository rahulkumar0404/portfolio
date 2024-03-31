import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducers/user';
import loginSlice from './reducers/login';
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    login: loginSlice.reducer,
  },
});

export default store;
