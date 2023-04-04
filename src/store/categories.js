
const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  activeCategory: ''
};

const categoriesReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SET':
      return {
        ...state,
        activeCategory: action.payload.name,
      }

    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export default categoriesReducer;
