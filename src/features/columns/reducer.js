import * as actionTypes from './types';

const initialState = {
  list: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case actionTypes.ADD_COLUMN: {
      const { column } = payload;
      const columns = [...state.list, column];
      return { ...state, list: columns };
    }

    case actionTypes.SET_COLUMNS: {
      const { columns } = payload;
      return { ...state, list: columns };
    }

    case actionTypes.REMOVE_COLUMN: {
      const { removeId } = payload;
      const columns = state.list.filter(({ id }) => removeId !== id);
      return { ...state, list: columns };
    }

    default:
      return state;
  }
};

export default reducer;
