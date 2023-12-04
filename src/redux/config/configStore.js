import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
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
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export default store;
