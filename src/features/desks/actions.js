import * as actionType from './types';
import { api } from '../../api';

export const addDesk = (desk) => ({ type: actionType.ADD_DESK, payload: { desk } });
export const removeDesk = (removeId) => ({ type: actionType.REMOVE_DESK, payload: { removeId } });
export const setDesks = (desks) => ({ type: actionType.SET_DESKS, payload: { desks } });

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
