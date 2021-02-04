import { types } from "../types/types";

const initialState = {
  notes: [],
  active: null,
};
export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.NotesActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    case types.NotesAddNew:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };
    case types.NotesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };
    case types.NotesUpdated:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload.note : note
        ),
      };
    case types.NotesDelete:
      return {
        ...state,
        active: null,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case types.NotesLogoutCleaning:
      return {
        ...state,
        notes: [],
        active: null,
      };
    default:
      return state;
  }
};
