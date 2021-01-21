import * as actionType from './types';
import { api } from '../../api';
import { getDesks } from "../desks/selectors";
import { fetchDesks } from '../desks/actions';

export const addColumn = (column) => ({ type: actionType.ADD_COLUMN, payload: { column } });
export const removeColumn = (removeId) => ({ type: actionType.REMOVE_COLUMN, payload: { removeId } });
export const setColumns = (columns) => ({ type: actionType.SET_COLUMNS, payload: { columns } });
export const replaceColumn = (id, name) => ({ type: actionType.REPLACE_COLUMN, payload: { id, name } });

export const fetchColumns = (deskId) => (dispatch, getState) => {
  const desks = getDesks(getState());
  const desk = desks.find(({ id }) => id === deskId) || {};
  // Может быть зацикливание, если ввести не существующий deskId
  if (!desk.id) {
    return dispatch(fetchDesks()).then(() => dispatch(fetchColumns(deskId)));
  }
  return api.getColumns(desk.id)
    .then((columns) => {
      dispatch({ type: actionType.FETCH_COLUMNS_SUCCESS });
      dispatch(setColumns(columns));
    })
    .catch(() => dispatch({ type: actionType.FETCH_COLUMNS_FAIL }));
};

export const createColumn = (name, deskId) => (dispatch) => {
  return api.createColumn(name, deskId)
    .then((doc) => {
      dispatch({ type: actionType.CREATE_COLUMN_SUCCESS });
      dispatch(addColumn({ id: doc.id, ...doc.data() }));
    })
    .catch(() => dispatch({ type: actionType.CREATE_COLUMN_FAIL }));
};

export const editColumn = (id, name) => (dispatch) => {
  return api.editColumn(id, name)
    .then(() => {
      dispatch({ type: actionType.EDIT_COLUMN_SUCCESS });
      dispatch(replaceColumn(id, name));
    })
    .catch(() => dispatch({ type: actionType.EDIT_COLUMN_FAIL }));
};


export const deleteColumn = (id) => (dispatch) => {
  return api.deleteColumn(id)
    .then(() => {
      dispatch({ type: actionType.DELETE_COLUMN_SUCCESS });
      dispatch(removeColumn(id));
    })
    .catch(() => dispatch({ type: actionType.DELETE_COLUMN_FAIL }));
};
