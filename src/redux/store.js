import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import user from './user';

const rootReducer = combineReducers({
  user
});

export const makeStore = (state = {}) => {
  // prettier-ignore
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(rootReducer, state, composeEnhancers(applyMiddleware(thunk)));
};

const store = makeStore();

export default store;
