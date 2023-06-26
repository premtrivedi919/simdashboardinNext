const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const settingReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_SETTING_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_SETTING_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case 'FETCH_SETTING_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default settingReducer;
  