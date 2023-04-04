import { legacy_createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import categoriesReducer from './categories';

let reducers = combineReducers({
  categories: categoriesReducer,
})

const store = () => {
  return legacy_createStore(reducers, composeWithDevTools());
}

export default store();

