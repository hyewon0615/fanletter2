const FILTERED_LETTER = "FILTERED_LETTER";
export const writeToSelect = (payload) => {
  return { type: FILTERED_LETTER, payload };
};

const initialState = {
  select: "전체",
};

const filteredLetter = (state = initialState, action) => {
  switch (action.type) {
    case FILTERED_LETTER:
      return {
        ...state,
        select: action.payload,
      };

    default:
      return state;
  }
};

export default filteredLetter;
