import { createStore } from "redux";
import { combineReducers } from "redux";
import fanletter from "redux/modules/fanletter";
import filteredLetter from "redux/modules/filteredLetter";
const rootReducer = combineReducers({
  fanletter,
  filteredLetter,
});
const store = createStore(rootReducer);

export default store;
