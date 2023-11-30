import { configureStore } from "@reduxjs/toolkit";
import fanletter from "redux/modules/fanletter";
import filteredLetter from "redux/modules/filteredLetter";

const store = configureStore({
  reducer: {
    fanletter,
    filteredLetter,
  },
});
export default store;
