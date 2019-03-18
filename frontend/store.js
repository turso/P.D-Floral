import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import instagramReducer from './reducers/instagramReducer';

const reducer = combineReducers({
  instagram: instagramReducer
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
