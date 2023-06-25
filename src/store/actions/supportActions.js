import axios from 'axios';

export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';



export const fetchComments = (id) => {
  return (dispatch) => {
    dispatch(fetchCommentsRequest());
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => {
        const comments = response.data;
        dispatch(fetchCommentsSuccess(comments));
      })
      .catch((error) => {
        dispatch(fetchCommentsFailure(error.message));
      });
  };
};

export const fetchCommentsRequest = () => {
  return {
    type: 'FETCH_COMMENTS_REQUEST',
  };
};

export const fetchCommentsSuccess = (comments) => {
  return {
    type: 'FETCH_COMMENTS_SUCCESS',
    payload: comments,
  };
};

export const fetchCommentsFailure = (error) => {
  return {
    type: 'FETCH_COMMENTS_FAILURE',
    payload: error,
  };
};
