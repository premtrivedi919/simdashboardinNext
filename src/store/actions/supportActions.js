
import axios from 'axios';

export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';



export const FETCH_COMMENTS_REQUESTc = 'FETCH_COMMENTS_REQUESTc';
export const FETCH_COMMENTS_SUCCESSc = 'FETCH_COMMENTS_SUCCESSc';
export const FETCH_COMMENTS_FAILUREc = 'FETCH_COMMENTS_FAILUREc';



export const FETCH_COMMENTS_REQUESTo = 'FETCH_COMMENTS_REQUESTo';
export const FETCH_COMMENTS_SUCCESSo = 'FETCH_COMMENTS_SUCCESSo';
export const FETCH_COMMENTS_FAILUREo = 'FETCH_COMMENTS_FAILUREo';


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





export const fetchCommentsclose = (id) => {
  return (dispatch) => {
    dispatch(fetchCommentsRequestc());
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => {
        const comments = response.data;
        dispatch(fetchCommentsSuccessc(comments));
      })
      .catch((error) => {
        dispatch(fetchCommentsFailurec(error.message));
      });
  };
};




export const fetchCommentsopen = (id) => {
  return (dispatch) => {
    dispatch(fetchCommentsRequesto());
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => {
        const comments = response.data;
        dispatch(fetchCommentsSuccesso(comments));
      })
      .catch((error) => {
        dispatch(fetchCommentsFailureo(error.message));
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


// close
export const fetchCommentsRequestc = () => {
  return {
    type: 'FETCH_COMMENTS_REQUESTc',
  };
};

export const fetchCommentsSuccessc = (comments) => {
  return {
    type: 'FETCH_COMMENTS_SUCCESSc',
    payload: comments,
  };
};

export const fetchCommentsFailurec = (error) => {
  return {
    type: 'FETCH_COMMENTS_FAILUREc',
    payload: error,
  };
};


// open


export const fetchCommentsRequesto = () => {
  return {
    type: 'FETCH_COMMENTS_REQUESTo',
  };
};

export const fetchCommentsSuccesso = (comments) => {
  return {
    type: 'FETCH_COMMENTS_SUCCESSo',
    payload: comments,
  };
};

export const fetchCommentsFailureo = (error) => {
  return {
    type: 'FETCH_COMMENTS_FAILUREo',
    payload: error,
  };
};
