import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import loginApi from "../../axios/loginApi";

export const __userData = createAsyncThunk(
  "USER_DATA",
  async (payload, thunkAPI) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken);
      const response = await loginApi.get("/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response);

      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      console.log(error);
      alert("로그아웃 되었습니다");
      localStorage.clear();
      // dispatch(__isLogin(false));
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  user: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const login = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [__userData.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__userData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.user = action.payload;
    },
    [__userData.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { userData } = login.actions;
export default login.reducer;
