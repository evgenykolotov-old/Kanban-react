import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import app from './reducer';
import desks from '../features/desks/reducer';
import columns from '../features/columns/reducer';
import cards from '../features/cards/reducer';
import card from '../features/card/reducer';

export const reducer = combineReducers({
  app, desks, columns, cards, card,
});

export const getStore = () => {
  const middleware = (store) => (next) => (action) => {
    return next(action);
  };

  return createStore(reducer, composeWithDevTools(applyMiddleware(thunk, middleware)));
};
