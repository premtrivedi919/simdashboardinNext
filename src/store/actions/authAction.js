// src/actions/authActions.js

import axios from 'axios';

export const login = (username, password) => {
  return async (dispatch) => {
    dispatch({ type: 'LOGIN_REQUEST' });

    try {
      // Replace the API URL with a dummy login endpoint
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', { username, password });

      // Assuming the API response contains a token
      const token = response.data.token;

      // Save the token to local storage or Redux state as needed
      // localStorage.setItem('token', token);

      dispatch({ type: 'LOGIN_SUCCESS', payload: token });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  };
};
