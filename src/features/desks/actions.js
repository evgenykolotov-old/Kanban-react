import * as actionType from './types';
import { api } from '../../api';

export const addDesk = (desk) => ({ type: actionType.ADD_DESK, payload: { desk } });
export const removeDesk = (removeId) => ({ type: actionType.REMOVE_DESK, payload: { removeId } });
export const setDesks = (desks) => ({ type: actionType.SET_DESKS, payload: { desks } });
export const replaceDesk = (id, name) => ({ type: actionType.REPLACE_DESK, payload: { id, name } });

export const fetchDesks = () => (dispatch) => {
  return api.getDesks()
    .then((desks) => {
      dispatch({ type: actionType.FETCH_DESKS_SUCCESS });
      dispatch(setDesks(desks));
    })
    .catch(() => dispatch({ type: actionType.FETCH_DESKS_FAIL }));
};

export const createDesk = (name) => (dispatch) => {
  return api.createDesk(name)
    .then((doc) => {
      dispatch({ type: actionType.CREATE_DESK_SUCCESS });
      dispatch(addDesk({ id: doc.id, ...doc.data() }));
    })
    .catch(() => dispatch({ type: actionType.CREATE_DESK_FAIL }));
};

export const editDesk = (id, name) => (dispatch) => {
  return api.editDesk(id, name)
    .then(() => {
      dispatch({ type: actionType.EDIT_DESK_SUCCESS });
      dispatch(replaceDesk(id, name));
    })
    .catch(() => dispatch({ type: actionType.EDIT_DESK_FAIL }));
};

export const deleteDesk = (id) => (dispatch) => {
  return api.deleteDesk(id)
    .then(() => {
      dispatch({ type: actionType.DELETE_DESK_SUCCESS });
      dispatch(removeDesk(id));
    })
    .catch(() => dispatch({ type: actionType.DELETE_DESK_FAIL }));
};
