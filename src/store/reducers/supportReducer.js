import {
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE,


// close
FETCH_COMMENTS_REQUESTc,
FETCH_COMMENTS_SUCCESSc,
FETCH_COMMENTS_FAILUREc,
// 
FETCH_COMMENTS_REQUESTo,
FETCH_COMMENTS_SUCCESSo,
FETCH_COMMENTS_FAILUREo,

  } from '../actions/supportActions';
  
  const initialState = {
    comments: [],
    commentsc: [],
    commentso: [],
    loading: false,
    error: null,
  };
  
  const supportReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COMMENTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_COMMENTS_SUCCESS:
        return {
          ...state,
          loading: false,
          comments: action.payload,
        };

        case FETCH_COMMENTS_SUCCESSc:
          return {
            ...state,
            loading: false,
            commentsc: action.payload,
          };

          case FETCH_COMMENTS_SUCCESSo:
            return {
              ...state,
              loading: false,
              commentso: action.payload,
            };

      case FETCH_COMMENTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default supportReducer;
  