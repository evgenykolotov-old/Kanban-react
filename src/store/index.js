import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducers/reducer';
import thunk from 'redux-thunk';

export const getStore = () => {
  const middleware = (store) => (next) => (action) => {
    return next(action);
  };

  return createStore(reducer, composeWithDevTools(applyMiddleware(thunk, middleware)));
};
