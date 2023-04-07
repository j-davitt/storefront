import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';

// import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import thunk from './middleware/thunk';

const store = () => configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
  }
});

// let reducers = combineReducers({
//   categories: categoriesReducer,
//   products: productsReducer,
//   cart: cartReducer,
// })

// const store = () =>  legacy_createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store();
