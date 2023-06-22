// src/reducers/commentsReducer.js

const initialState = {
    data: [], // Initialize data as an empty array
    loading: false,
    error: null,
  };
  
  const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COMMENTS_REQUEST':
        return { ...state, loading: true, error: null };
      case 'FETCH_COMMENTS_SUCCESS':
        return { ...state, loading: false, data: action.payload }; // Update the data with the fetched comments
      case 'FETCH_COMMENTS_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default commentsReducer;
  