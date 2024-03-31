import axios from 'axios';
import { userActions } from '../reducers/user';
export const getUser = () => {
  return async (dispatch) => {
    const getUserData = async () => {
      const response = await axios.get('http://localhost:4000/api/user');
      if (response.statusText != 'OK') {
        throw new Error('Something went wrong');
      }
      const { data } = response;
      return data;
    };
    try {
      dispatch(userActions.getUserRequest());

      const userData = await getUserData();
      dispatch(userActions.getUserSuccess(userData));
    } catch (err) {
      dispatch(userActions.getUserFailure(err.message));
    }
  };
};
