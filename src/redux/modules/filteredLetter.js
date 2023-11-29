const FILTERED_LETTER = "FILTERED_LETTER";
export const writeToSelect = (payload) => {
  return { type: FILTERED_LETTER, payload };
};

const initialState = {
  select: "아이돌 솔로가수 배우",
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
