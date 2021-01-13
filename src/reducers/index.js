import { combineReducers } from 'redux';
import app from './app';
import desks from './desks';
import columns from './columns';
import cards from './cards';

export const reducer = combineReducers({
  app, desks, columns, cards
});