import { types } from "../types/types";

const initialState = {
  loading: false,
  msgError: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetError:
      return {
        ...state,
        msgError: action.payload,
      };
    case types.uiRemoveError:
      return {
        ...state,
        msgError: null,
      };
    case types.uiSetLoading:
      return {
        ...state,
        loading: true,
      };
    case types.uiRemoveLoading:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};