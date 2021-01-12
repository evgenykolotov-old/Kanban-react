import * as actionTypes from '../actions/types';

const initialState = {
  desks: [],
  columns: [],
  cards: [],
  activePanel: null,
  popout: null,
};

export const reducer = (state = initialState, { type, payload }) => {
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

    case actionTypes.SET_ACTIVE_PANEL: {
      const { panel } = payload;
      return { ...state, activePanel: panel };
    }

    case actionTypes.SET_POPOUT: {
      const { popout } = payload;
      return { ...state, popout };
    }

    default:
      return state;
  }
};