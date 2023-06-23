import axios from 'axios';




export const login = (username, password) => {
  return async (dispatch) => {
    dispatch({ type: 'LOGIN_REQUEST' });

    try {
      const response = await axios.post(
        'http://localhost:8888/api/user/login',
        { username, password }
      );

      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  };
};

