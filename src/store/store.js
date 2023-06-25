import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/authReducer';
import commentsReducer from './reducers/commentsReducer';
import settingReducer from './reducers/settingReducer';
import strategyReducer from './reducers/strategyReducer';
import supportReducer from './reducers/supportReducer';
const rootReducer = combineReducers({
  auth: authReducer,
  comments: commentsReducer,
  setting: settingReducer,
  strategy: strategyReducer,
  support: supportReducer,

});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
