import { createStore, combineReducers, applyMiddleware } from 'redux';
import authReducer from './reducers/authReducer';
import thunkMiddleware from './thunkMiddleware';

const rootReducer = combineReducers({
  auth: authReducer,
});

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
  return store;
};

export default configureStore;