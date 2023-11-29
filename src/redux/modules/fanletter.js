import { data } from "shared/fakedata";
//action creator
const ADD_LETTER = "ADD_LETTER";
const DELETE_LETTER = "DELETE_LETTER";
const EDIT_LETTER = "EDIT_LETTER";
export const addLetter = (payload) => {
  return { type: ADD_LETTER, payload };
};
export const deleteLetter = (id) => {
  return { type: DELETE_LETTER, id };
};
export const editLetter = (payload) => {
  return { type: EDIT_LETTER, payload };
};

const initialState = {
  letters: data,
};

const fanletter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LETTER:
      return {
        ...state,
        letters: [...state.letters, action.payload],
      };
    case DELETE_LETTER:
      const filteredLetters = state.letters.filter(
        (letter) => letter.id !== action.id,
      );

      return {
        ...state,
        letters: filteredLetters,
      };

    case EDIT_LETTER:
      return {
        ...state,
        letters: action.payload,
      };
    default:
      return state;
  }
};

export default fanletter;
