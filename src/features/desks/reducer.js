import * as actionTypes from './types';

const initialState = {
  list: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case actionTypes.ADD_DESK: {
      const { desk } = payload;
      const desks = [...state.list, desk];
      return { ...state, list: desks };
    }

    case actionTypes.SET_DESKS: {
      const { desks } = payload;
      return { ...state, list: desks };
    }

    case actionTypes.REMOVE_DESK: {
      const { removeId } = payload;
      const desks = state.list.filter(({ id }) => removeId !== id);
      return { ...state, list: desks };
    }

    default:
      return state;
  }
};

export default reducer;
