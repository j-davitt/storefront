import { legacy_createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import categoriesReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';

let reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
})

const store = () =>  legacy_createStore(reducers, composeWithDevTools());

export default store();
