import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const __isLogin = createAsyncThunk("login", (payload, thunkAPI) => {
  thunkAPI.dispatch(islogin(payload));
});

const initialState = {
  isLogin: false,
};

const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    islogin: (state, action) => {
      return {
        ...state,
        islogin: action.payload,
      };
    },
  },
});

export default authSlice.reducer;
export const { islogin } = authSlice.actions;
