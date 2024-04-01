import axios from 'axios';
import { loginActions } from '../reducers/login';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};
export const loginUser = (email, password) => {
  return async (dispatch) => {
    const loginUser = async () => {
      const response = await axios.post(
        'http://localhost:4000/api/login',
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      if (response.statusText != 'OK') {
        throw new Error('Something went wrong');
      }
      const { data } = response;
      return data;
    };
    try {
      dispatch(loginActions.onLoginRequest());
      const userData = await loginUser();
      dispatch(loginActions.onLoginSuccess(userData.message));
    } catch (err) {
      dispatch(loginActions.onLoginFailure(err.response.data.message));
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    const logout = async () => {
      const response = await axios.get(
        'http://localhost:4000/api/logout',
        config
      );
      if (response.statusText != 'OK') {
        throw new Error('Something went wrong');
      }
      console.log(response.cookies);
      const { data } = response;
      return data;
    };
    try {
      dispatch(loginActions.onLogoutRequest());
      const userData = await logout();
      dispatch(loginActions.onLogoutSuccess(userData.message));
    } catch (err) {
      dispatch(loginActions.onLoginFailure(err.response.data.message));
    }
  };
};

export const loadUser = () => {
  return async (dispatch) => {
    const loadUserData = async () => {
      const response = await axios.get('http://localhost:4000/api/me', config);
      if (response.statusText != 'OK') {
        throw new Error('Something went wrong');
      }
      const { data } = response;
      return data;
    };
    try {
      dispatch(loginActions.onLoadUserRequest());
      const userData = await loadUserData();
      dispatch(loginActions.onLoadUserSuccess(userData.user));
    } catch (err) {
      dispatch(loginActions.onLoadUserFailure(err.response.data.message));
    }
  };
};
