import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    activeCategory: '',
  },
  reducers: {
    setCategory: (state, action) => {
      state.activeCategory = action.payload.name;
    },
    initialSetCategories: (state, action) => {
      state.categories = action.payload;
    }
  }

});


// const initialState = {
//   categories: [
//     // { name: 'electronics', displayName: 'Electronics' },
//     // { name: 'food', displayName: 'Food' },
//     // { name: 'clothing', displayName: 'Clothing' },
//   ],
//   activeCategory: ''
// };

// const categoriesReducer = (state = initialState, action) => {
//   switch(action.type){
//     case 'SET':
//       return {
//         ...state,
//         activeCategory: action.payload.name,
//       }
//     case 'INITIAL_SET':
//       return {
//         ...state,
//         categories: action.payload,
//       }
//     case 'RESET':
//       return initialState;
//     default:
//       return state;
//   }
// }

export const { setCategory, initialSetCategories } = categorySlice.actions;
export default categorySlice.reducer;
