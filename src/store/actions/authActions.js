
import Cookies from 'js-cookie';


import axios from 'axios';

export const login = (username, password, onSuccess) => {
  return async (dispatch) => {
    dispatch({ type: 'LOGIN_REQUEST' });

    try {
      const response = await axios.post(
        'http://localhost:8888/api/user/login',
        { username, password }
      );
      Cookies.set('token', response.data.token);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });

      // Call the onSuccess callback
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  };
};


export const logout = () => {
  return (dispatch) => {
    // Clear the token from the cookie or any other necessary cleanup
    Cookies.remove('token');

    dispatch({ type: 'LOGOUT' });
  };
};



// import axios from 'axios';

// export const login = (username, password, onSuccess) => {
//   return async (dispatch) => {
//     dispatch({ type: 'LOGIN_REQUEST' });

//     try {
//       const csrfToken = 'yBUiLofsvtaWwrUKFtVTYqXfoOfs4wRMBiQTQ5IMtw5p0eKJbIJuhsIblcSOapXh';
//       const headers = {
//         'Accept': 'application/json',
//         'X-CSRFToken': csrfToken,
//       };

//       const data = {
//         username,
//         password,
//       };

//       const response = await axios.post(
//         'https://staging.paper.quant-trade.io/api/user/login/',
//         data,
//         { headers }
//       );

//       dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });

//       // Call the onSuccess callback
//       if (onSuccess) {
//         onSuccess();
//       }
//     } catch (error) {
//       dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
//     }
//   };
// };
