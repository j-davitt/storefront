import { createSlice } from '@reduxjs/toolkit';

let tempState = [];

const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return tempState.filter(e => e.category === action.payload.name);
    },
    updateProduct: (state, action) => {
      return tempState.map(product => {
        if (product.name === action.payload.name) {
          return action.payload;
        }
        return product;
      })
    },
    initialSetProducts: (state, action) => {
      tempState = [...action.payload];
      return action.payload;
    }
  }
})

// const initialState =  [
//     // { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
//     // { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
//     // { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
//     // { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
//     // { name: 'Apples', category: 'food', price: .99, inStock: 500 },
//     // { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
//     // { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
//   ];
// let tempState = [];

// const productsReducer = (state = initialState, action) => {
//   switch(action.type){
//     case 'SET':
//       return tempState.filter(e => e.category === action.payload.name);
//     case 'UPDATE':
//       return tempState = tempState.map(e => e.name === action.payload.name ? action.payload : e);
//     case 'INITIAL_SET_PROD':
//       tempState = [...action.payload];
//       return action.payload;
//     case 'RESET':
//       return initialState;
//     default:
//       return state;
//   }
// }

export const { setProducts, initialSetProducts, updateProduct } = productSlice.actions;
export default productSlice.reducer;

// export default productsReducer;
