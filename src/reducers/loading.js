import { SHOW_lOADING, HIDE_LOADING } from "../actions/ActionTypes";

export const loadingReducer = (state = { isShowLoading: false }, action) => {
  switch (action.type) {
    case SHOW_lOADING:
      return { ...state, isShowLoading: true };
    case HIDE_LOADING:
      return { ...state, isShowLoading: false };
    default:
      return state;
  }
};
