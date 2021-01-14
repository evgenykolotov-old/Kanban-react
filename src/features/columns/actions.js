import * as actionType from './types';
import { api } from '../../api';

export const addColumn = (column) => ({ type: actionType.ADD_COLUMN, payload: { column } });
export const removeColumn = (removeId) => ({ type: actionType.REMOVE_COLUMN, payload: { removeId } });
export const setColumns = (columns) => ({ type: actionType.SET_COLUMNS, payload: { columns } });

export const fetchColumns = (deskId) => (dispatch, getState) => {
  const desks = getState().desks.list;
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
