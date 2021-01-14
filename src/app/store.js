import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import app from './reducer';
import desks from '../features/desks/reducer';
import columns from '../features/columns/reducer';
import cards from '../features/cards/reducer';

export const reducer = combineReducers({
  app, desks, columns, cards
});

export const getStore = () => {
  const middleware = (store) => (next) => (action) => {
    return next(action);
  };

  return createStore(reducer, composeWithDevTools(applyMiddleware(thunk, middleware)));
};
