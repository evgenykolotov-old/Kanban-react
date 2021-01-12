import * as actionType from './types';
import { api } from '../api';

export const addColumn = (column) => ({ type: actionType.ADD_COLUMN, payload: { column } });
export const removeColumn = (removeId) => ({ type: actionType.REMOVE_COLUMN, payload: { removeId } });
export const setColumns = (columns) => ({ type: actionType.SET_COLUMNS, payload: { columns } });

export const addDesk = (desk) => ({ type: actionType.ADD_DESK, payload: { desk } });
export const removeDesk = (removeId) => ({ type: actionType.REMOVE_DESK, payload: { removeId } });
export const setDesks = (desks) => ({ type: actionType.SET_DESKS, payload: { desks } });

export const addCard = (card) => ({ type: actionType.ADD_CARD, payload: { card } });
export const removeCard = (removeId) => ({ type: actionType.REMOVE_CARD, payload: { removeId } });
export const setCards = (cards) => ({ type: actionType.SET_CARDS, payload: { cards } });

export const setActivePanel = (panel) => ({ type: actionType.SET_ACTIVE_PANEL, payload: { panel } });
export const changeRoute = ({ route }) => setActivePanel(route.name);

export const setPopout = (popout) => ({ type: actionType.SET_POPOUT, payload: { popout } });

export const fetchDesks = () => (dispatch) => {
  return api.getDesks()
    .then(desks => dispatch(setDesks(desks)))
    .catch(() => dispatch({ type: 'fetchDesksFail'}));
}

export const deleteDesk = (id) => (dispatch) => {
  return api.deleteDesk(id)
    .then(() => dispatch(removeDesk(id)))
    .catch(() => dispatch({ type: 'deleteDeskFail'}));
}

export const createDesk = (name) => (dispatch) => {
  return api.createDesk(name)
    .then(doc => dispatch(addDesk({ id: doc.id, ...doc.data() })))
    .catch(() => dispatch({ type: 'createDeskFail'}));
};

export const fetchColumns = (deskId) => (dispatch, getState) => {
  const desks = getState().desks;
  const desk = desks.find(({ id }) => id === deskId) || {};
  if (desk.id) {
    return api.getColumns(desk.id)
      .then(columns => dispatch(setColumns(columns)))
      .catch(() => dispatch({ type: 'fetchColumnsFail'}));
  }
};

export const deleteColumn = (id) => (dispatch) => {
  return api.deleteColumn(id)
    .then(() => dispatch(removeColumn(id)))
    .catch(() => dispatch({ type: 'deleteColumnFail'}));
};

export const createColumn = (name, deskId) => (dispatch) => {
  return api.createColumn(name, deskId)
    .then((doc) => dispatch(addColumn({ id: doc.id, ...doc.data() })))
    .catch(() => dispatch({ type: 'createColumnFail'}));
};

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
