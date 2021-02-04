import { types } from "../types/types";

export const setError = (err) => ({
  type: types.uiSetError,
  payload: err,
});

export const removeError = () => ({
  type: types.uiRemoveError,
});

export const setLoading = () => ({
  type: types.uiSetLoading,
});

export const removeLoading = () => ({
  type: types.uiRemoveLoading,
});
