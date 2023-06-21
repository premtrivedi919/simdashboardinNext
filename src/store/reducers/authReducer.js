export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const initialState = {
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export default authReducer;
