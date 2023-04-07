import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      return [...state, action.payload];
    },
    removeFromCart: (state, action) => {
      return state.filter(e => e.name !== action.payload.name);
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

// const initialState = [];


// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD':
//       return [...state, action.payload];

//     case 'REMOVE':
//       return state.filter(e => e.name !== action.payload.name);

//     default:
//       return state;
//   }
// }


// export default cartReducer;