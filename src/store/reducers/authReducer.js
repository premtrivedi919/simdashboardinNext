import Cookies from 'js-cookie';


const initialState = {
  isLoggedIn: Cookies.get('token') ? true : false, // Check if token exists in the cookie
  error: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isLoggedIn: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
      };

      case 'LOGOUT':
        return {
          ...state,
          isLoggedIn: false,
        };
  
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
