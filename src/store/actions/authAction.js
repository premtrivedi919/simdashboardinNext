import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        'https://staging.paper.quant-trade.io/api/user/login/',
        {},
        {
          headers: {
            'accept': 'application/json',
            'X-CSRFToken': '4ko8S6LdNOKjtRyadtXxYERnp8m6SwqQaxmPtNA3C7O4ggvYzTJUfW9xHZuFk8Nn',
          },
        }
      );

      // Handle the response data or perform any necessary actions
      console.log(response.data);

      // Dispatch the login success action
      dispatch({ type: LOGIN_SUCCESS });
    } catch (error) {
      // Handle error or dispatch failure action
      console.error(error);
    }
  };
};

