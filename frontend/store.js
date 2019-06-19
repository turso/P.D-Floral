import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import navReducer from './reducers/navReducer';

const reducer = combineReducers({
  Nav: navReducer
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
