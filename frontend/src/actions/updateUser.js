import axios from 'axios';
import { updateUserAction } from '../reducers/updateUser.js';

export const updateUser = (name, email, password, skills, about) => {
  return async (dispatch) => {
    const updateUserData = async () => {
      const response = await axios.put(
        'http://localhost:4000/api/admin/update',
        {
          name,
          email,
          password,
          skills,
          about,
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
      dispatch(updateUserAction.getUserLoading());
      const userData = await updateUserData();
      dispatch(updateUserAction.onUpdateUserSuccess(userData.message));
    } catch (err) {
      dispatch(updateUserAction.onUpdateUserFailure(err.response.data.message));
    }
  };
};
