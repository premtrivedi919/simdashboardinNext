import axios from 'axios';

export const FETCH_STRATEGIES_REQUEST = 'FETCH_STRATEGIES_REQUEST';
export const FETCH_STRATEGIES_SUCCESS = 'FETCH_STRATEGIES_SUCCESS';
export const FETCH_STRATEGIES_FAILURE = 'FETCH_STRATEGIES_FAILURE';

export const fetchStrategiesRequest = () => ({
  type: FETCH_STRATEGIES_REQUEST,
});

export const fetchStrategiesSuccess = (strategies) => {
  const limitedStrategies = strategies.slice(0, 3); // Limiting to 4 objects
  return {
    type: FETCH_STRATEGIES_SUCCESS,
    payload: limitedStrategies,
  };
};

export const fetchStrategiesFailure = (error) => ({
  type: FETCH_STRATEGIES_FAILURE,
  payload: error,
});

export const fetchStrategies = () => {
  return (dispatch) => {
    dispatch(fetchStrategiesRequest());

    axios
      .get('https://jsonplaceholder.typicode.com/comments?postId=1')
      .then((response) => {
        const strategies = response.data;
        dispatch(fetchStrategiesSuccess(strategies));
      })
      .catch((error) => {
        dispatch(fetchStrategiesFailure(error.message));
      });
  };
};
