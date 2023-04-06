import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import categoriesReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';
import thunk from './middleware/thunk';

let reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
})

const store = () =>  legacy_createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store();
