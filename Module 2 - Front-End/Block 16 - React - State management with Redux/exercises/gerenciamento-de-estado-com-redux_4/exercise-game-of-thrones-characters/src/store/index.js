//importe o método applyMiddleware 
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
//importe o redux-thunk
import thunk from 'redux-thunk';
import reducer from '../reducers';

//aplique o middleware
const rootReducer = combineReducers({ reducer });
const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;
