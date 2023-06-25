import {
  FETCH_STRATEGIES_REQUEST,
  FETCH_STRATEGIES_SUCCESS,
  FETCH_STRATEGIES_FAILURE,
} from '../actions/strategyActions';

const initialState = {
  strategies: [],
  loading: false,
  error: null,
};

const strategyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STRATEGIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_STRATEGIES_SUCCESS:
      return {
        ...state,
        strategies: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_STRATEGIES_FAILURE:
      return {
        ...state,
        strategies: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default strategyReducer;
