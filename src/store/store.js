// src/store/index.js

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import commentsReducer from './reducers/commentsReducer';
import authReducer from './reducers/authReducer';

// Combine your reducers
const rootReducer = combineReducers({
  comments: commentsReducer,
  auth: authReducer,
  // Other reducers go here
});

// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
