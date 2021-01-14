import * as actionType from './types';
import { api } from '../../api';

export const addCard = (card) => ({ type: actionType.ADD_CARD, payload: { card } });
export const removeCard = (removeId) => ({ type: actionType.REMOVE_CARD, payload: { removeId } });
export const setCards = (cards) => ({ type: actionType.SET_CARDS, payload: { cards } });

export const fetchCards = (columnId) => (dispatch) => {
  return api.getCards(columnId)
    .then(cards => dispatch(setCards(cards)))
    .catch(() => dispatch({ type: 'fetchCardsFail'}));
};

export const deleteCard = (id) => (dispatch) => {
  return api.deleteCard(id)
    .then(() => dispatch(removeCard(id)))
    .catch(() => dispatch({ type: 'deleteCardFail'}));
};

export const createCard = (name, columnId) => (dispatch) => {
  return api.createCard(name, columnId)
    .then(doc => dispatch(addCard({ id: doc.id, ...doc.data() })))
    .catch(() => dispatch({ type: 'createCardFail'}));
};
