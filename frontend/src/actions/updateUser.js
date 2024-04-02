import axios from 'axios';
import { updateUserAction } from '../reducers/updateUser.js';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

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

export const addTimeline = (title, description, date) => {
  return async (dispatch) => {
    const addTimeline = async () => {
      const response = await axios.post(
        'http://localhost:4000/api/admin/timeline/add',
        {
          title,
          description,
          date,
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
      dispatch(updateUserAction.onTimelineLoading());
      const timelineResponse = await addTimeline();
      dispatch(
        updateUserAction.onUpdateTimelineSuccess(timelineResponse.message)
      );
    } catch (err) {
      dispatch(
        updateUserAction.onUpdateTimelineFailure(err.response.data.message)
      );
    }
  };
};

export const deleteTimeline = (id) => {
  return async (dispatch) => {
    const addTimeline = async () => {
      const response = await axios.delete(
        `http://localhost:4000/api/admin/timeline/${id}`,
        config
      );
      if (response.statusText != 'OK') {
        throw new Error('Something went wrong');
      }
      const { data } = response;
      return data;
    };

    try {
      dispatch(updateUserAction.onTimelineLoading());
      const timelineResponse = await addTimeline();
      dispatch(
        updateUserAction.onUpdateTimelineSuccess(timelineResponse.message)
      );
    } catch (err) {
      dispatch(
        updateUserAction.onUpdateTimelineFailure(err.response.data.message)
      );
    }
  };
};

export const addYoutube = (title, url, image) => {
  return async (dispatch) => {
    const addYoutubeVideo = async () => {
      const response = await axios.post(
        'http://localhost:4000/api/admin/youtube/add',
        {
          title,
          url,
          image,
        },
        config
      );
      if (response.statusText != 'OK') {
        throw new Error('Something went wrong');
      }
      const { data } = response;
      return data;
    };

    try {
      dispatch(updateUserAction.getUserLoading());
      const youtubeResponse = await addYoutubeVideo();
      dispatch(updateUserAction.onUpdateUserSuccess(youtubeResponse.message));
    } catch (err) {
      dispatch(updateUserAction.onUpdateUserFailure(err.response.data.message));
    }
  };
};

export const deleteYoutube = (id) => {
  return async (dispatch) => {
    const deleteYoutube = async () => {
      const response = await axios.delete(
        `http://localhost:4000/api/admin/youtube/${id}`,
        config
      );
      if (response.statusText != 'OK') {
        throw new Error('Something went wrong');
      }
      const { data } = response;
      return data;
    };

    try {
      dispatch(updateUserAction.getUserLoading());
      const youtubeResponse = await deleteYoutube();
      dispatch(updateUserAction.onUpdateUserSuccess(youtubeResponse.message));
    } catch (err) {
      dispatch(updateUserAction.onUpdateUserFailure(err.response.data.message));
    }
  };
};

export const addProject = (title, url, image, description, techStack) => {
  return async (dispatch) => {
    const addUserProject = async () => {
      const response = await axios.post(
        'http://localhost:4000/api/admin/youtube/add',
        {
          title,
          url,
          image,
          description,
          techStack,
        },
        config
      );
      if (response.statusText != 'OK') {
        throw new Error('Something went wrong');
      }
      const { data } = response;
      return data;
    };

    try {
      dispatch(updateUserAction.getUserLoading());
      const projectResponse = await addUserProject();
      dispatch(updateUserAction.onUpdateUserSuccess(projectResponse.message));
    } catch (err) {
      dispatch(updateUserAction.onUpdateUserFailure(err.response.data.message));
    }
  };
};

export const deleteProject = (id) => {
  return async (dispatch) => {
    const deleteUserProject = async () => {
      const response = await axios.delete(
        `http://localhost:4000/api/admin/project/${id}`,
        config
      );
      if (response.statusText != 'OK') {
        throw new Error('Something went wrong');
      }
      const { data } = response;
      return data;
    };

    try {
      dispatch(updateUserAction.getUserLoading());
      const projectResponse = await deleteUserProject();
      dispatch(updateUserAction.onUpdateUserSuccess(projectResponse.message));
    } catch (err) {
      dispatch(updateUserAction.onUpdateUserFailure(err.response.data.message));
    }
  };
};
