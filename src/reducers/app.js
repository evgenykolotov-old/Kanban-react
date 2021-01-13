import * as actionTypes from '../actions/types';

const initialState = {
  activePanel: null,
  popout: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
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

export default reducer;
