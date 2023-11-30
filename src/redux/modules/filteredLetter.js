import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const __writeToSelect = createAsyncThunk(
  "WRITE_TO",
  (payload, thunkAPI) => {
    thunkAPI.dispatch(writeToSelect(payload));
  },
);

const initialState = {
  select: "전체",
};

const filteredLetter = createSlice({
  name: "FILTERED_LETTER",
  initialState,
  reducers: {
    writeToSelect: (state, action) => {
      return {
        ...state,
        select: action.payload,
      };
    },
  },
});

export default filteredLetter.reducer;
export const { writeToSelect } = filteredLetter.actions;
