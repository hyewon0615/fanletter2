import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../axios/api";
export const __addLetter = createAsyncThunk(
  "ADD_LETTER",
  async (payload, thunkAPI) => {
    try {
      const response = await api.post("/letters", payload);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const __deleteLetter = createAsyncThunk(
  "DELETE_LETTER",
  async (payload, thunkAPI) => {
    try {
      await api.delete(`/letters/${payload}`); //Promise-> resolve(네크워크 요청이 성공한 경우)-> dispatch해주는 기능을 가진 API
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const __editLetter = createAsyncThunk(
  "EDIT_LETTER",
  async (payload, thunkAPI) => {
    try {
      await api.patch(`/letters/${payload.id}`, payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  letters: [],
  isLoading: false,
  isError: false,
  error: null,
};
export const __getLetters = createAsyncThunk(
  "getLetters",
  async (payload, thunkAPI) => {
    try {
      const response = await api.get("/letters");

      //Promise-> resolve(네크워크 요청이 성공한 경우)-> dispatch해주는 기능을 가진 API
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      //Promise-> resolve(네크워크 요청이 실패한 경우)-> dispatch해주는 기능을 가진 API
      return thunkAPI.rejectWithValue(error);
    }
  },
);
export const fanletter = createSlice({
  name: "letters",
  initialState,
  reducers: {},
  extraReducers: {
    [__getLetters.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__getLetters.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.letters = action.payload;
    },
    [__getLetters.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },

    [__addLetter.fulfilled]: (state, action) => {
      state.letters.push(action.payload);
    },
    [__deleteLetter.fulfilled]: (state, action) => {
      state.letters = state.letters.filter(
        (item) => item.id !== action.payload,
      );
    },
    [__editLetter.fulfilled]: (state, action) => {
      state.letters = state.letters.map((item) => {
        if (item.id === action.payload.id) {
          return (item = action.payload);
        }
        return item;
      });
    },
  },
});

export const { addLetter, deleteLetter, editLetter } = fanletter.actions;
export default fanletter.reducer;
