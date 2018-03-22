import { NOTES_REQUEST, NOTES_ERROR, NOTES_SUCCESS, NOTES_ADD_REQUEST, NOTES_ADD_ERROR, NOTES_ADD_SUCCESS } from '../actions/notes';

const initialState = {
  isFetching: false,
  isAdding: false,
  notes: [],
  error: null,
  errors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NOTES_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case NOTES_ERROR:
      return {
        ...state,
        isFetching: action.isFetching,
        notes: action.notes,
        error: action.error,
      };

    case NOTES_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        notes: action.notes,
        error: action.error,
      };

    case NOTES_ADD_REQUEST:
      return {
        ...state,
        isAdding: action.isAdding,
        errors: [],
      };
    case NOTES_ADD_ERROR:
      return {
        ...state,
        isAdding: action.isAdding,
        errors: action.errors,
      };
    case NOTES_ADD_SUCCESS:
      return {
        ...state,
        isAdding: action.isAdding,
        notes: [...state.notes, action.note],
        error: action.error,
      };

    default:
      return state;
  }
};
