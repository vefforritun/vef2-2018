import { get, post } from '../api';

export const NOTES_REQUEST = 'NOTES_REQUEST';
export const NOTES_ERROR = 'NOTES_ERROR';
export const NOTES_SUCCESS = 'NOTES_SUCCESS';

function requestNotes() {
  return {
    type: NOTES_REQUEST,
    isFetching: true,
    error: null,
  }
}

function notesError(error) {
  return {
    type: NOTES_ERROR,
    isFetching: true,
    notes: [],
    error: error,
  }
}

function receiveNotes(notes) {
  return {
    type: NOTES_SUCCESS,
    isFetching: false,
    notes,
    error: null,
  }
}


export const NOTES_ADD_REQUEST = 'NOTES_ADD_REQUEST';
export const NOTES_ADD_ERROR = 'NOTES_ADD_ERROR';
export const NOTES_ADD_SUCCESS = 'NOTES_ADD_SUCCESS';

function addingNote(notes) {
  return {
    type: NOTES_ADD_REQUEST,
    isAdding: false,
    errors: null,
  }
}

function addNotesError(errors) {
  return {
    type: NOTES_ADD_ERROR,
    isAdding: false,
    errors,
  }
}

function receiveAddNote(note) {
  return {
    type: NOTES_ADD_SUCCESS,
    isAdding: false,
    note,
    errors: null,
  }
}

export const fetchNotes = () => {
  return async (dispatch) => {
    dispatch(requestNotes());

    let notes;
    try {
      notes = await get('/');
    } catch (e) {
      return dispatch(notesError(e))
    }

    dispatch(receiveNotes(notes.result));
  }
}

export const addNote = (title, text, datetime) => {
  return async (dispatch) => {
    dispatch(addingNote());

    let note;
    try {
      note = await post('/', { title, text, datetime });
    } catch (e) {
      return dispatch(addNotesError([{ message: e }]))
    }

    if (note.status >= 400) {
      return dispatch(addNotesError(note.result))
    }

    dispatch(receiveAddNote(note.result))
  }
}
