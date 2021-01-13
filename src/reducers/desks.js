import * as actionTypes from '../actions/types';

const initialState = {
  desks: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    
    case actionTypes.ADD_DESK: {
      const { desk } = payload;
      const desks = [...state.desks, desk];
      return { ...state, desks };
    }

    case actionTypes.SET_DESKS: {
      const { desks } = payload;
      return { ...state, desks };
    }

    case actionTypes.REMOVE_DESK: {
      const { removeId } = payload;
      const desks = state.desks.filter(({ id }) => removeId !== id);
      return { ...state, desks };
    }

    default:
      return state;
  }
};

export default reducer;
