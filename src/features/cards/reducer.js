import * as actionTypes from './types';

const initialState = {
  list: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case actionTypes.ADD_CARD: {
      const { card } = payload;
      const cards = [...state.list, card];
      return { ...state, list: cards };
    }

    case actionTypes.SET_CARDS: {
      const { cards } = payload;
      return { ...state, list: cards };
    }

    case actionTypes.REMOVE_CARD: {
      const { removeId } = payload;
      const cards = state.list.filter(({ id }) => removeId !== id);
      return { ...state, list: cards };
    }

    default:
      return state;
  }
};

export default reducer;
