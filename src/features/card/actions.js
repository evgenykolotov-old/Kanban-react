import * as actionTypes from './types';
import { api } from '../../api';
import { deleteCard as deleteItem } from "../cards/actions";

const setCard = ({ id, name, text }) => ({ type: actionTypes.SET_CARD, payload: { id, name, text } });
const replaceCard = (id, data = {}) => ({ type: actionTypes.REPLACE_CARD, payload: data });
const removeCard = () => ({ type: actionTypes.REMOVE_CARD });

export const fetchCard = (cardId) => (dispatch) => {
  return api.getCard(cardId)
    .then(card => dispatch(setCard(card)))
    .catch(() => dispatch({ type: 'fetchCardFail'}));
};

export const editCard = (id, data) => (dispatch) => {
  return api.editCard(id, data)
    .then(() => dispatch(replaceCard(id, data)))
    .catch(() => dispatch({ type: 'editCardFail' }))
};

export const deleteCard = (id) => (dispatch) => dispatch(deleteItem(id)).then(() => dispatch(removeCard()));
