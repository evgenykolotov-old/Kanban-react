import * as actionTypes from '../actions/types';

const initialState = {
  columns: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    
    case actionTypes.ADD_COLUMN: {
      const { column } = payload;
      const columns = [...state.columns, column];
      return { ...state, columns };
    }

    case actionTypes.SET_COLUMNS: {
      const { columns } = payload;
      return { ...state, columns };
    }

    case actionTypes.REMOVE_COLUMN: {
      const { removeId } = payload;
      const columns = state.columns.filter(({ id }) => removeId !== id);
      return { ...state, columns };
    }

    default:
      return state;
  }
};

export default reducer;
