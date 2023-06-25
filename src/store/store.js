import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/authReducer';
import commentsReducer from './reducers/commentsReducer';
import settingReducer from './reducers/settingReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  comments: commentsReducer,
  setting: settingReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
