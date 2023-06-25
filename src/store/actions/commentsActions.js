import axios from 'axios';

export const fetchComments = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'FETCH_COMMENTS_REQUEST' });

      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
      const data = response.data;

      console.log('Fetched Comments:', data); // Add this line to check the fetched data

      dispatch({ type: 'FETCH_COMMENTS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_COMMENTS_FAILURE', payload: error.message });
    }
  };
};


