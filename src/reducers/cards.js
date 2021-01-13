import * as actionTypes from '../actions/types';

const initialState = {
  cards: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case actionTypes.ADD_CARD: {
      const { card } = payload;
      const cards = [...state.cards, card];
      return { ...state, cards };
    }

    case actionTypes.SET_CARDS: {
      const { cards } = payload;
      return { ...state, cards };
    }

    case actionTypes.REMOVE_CARD: {
      const { removeId } = payload;
      const cards = state.cards.filter(({ id }) => removeId !== id);
      return { ...state, cards };
    }

    default:
      return state;
  }
};

export default reducer;
