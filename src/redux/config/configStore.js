import { configureStore } from "@reduxjs/toolkit";
import authSlice from "redux/modules/authSlice";
import fanletter from "redux/modules/fanletter";
import filteredLetter from "redux/modules/filteredLetter";
import login from "redux/modules/login";
const store = configureStore({
  reducer: {
    fanletter,
    filteredLetter,
    login,
    authSlice,
  },
});
export default store;
