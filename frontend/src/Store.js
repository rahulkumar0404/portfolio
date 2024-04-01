import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducers/user';
import loginSlice from './reducers/login';
import updateUserSlice from './reducers/updateUser';
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    login: loginSlice.reducer,
    updateUser: updateUserSlice.reducer,
  },
});

export default store;
