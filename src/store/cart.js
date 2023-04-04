
const initialState = [];


const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];

    case 'REMOVE':
      return state.filter(e => e.name !== action.payload.name);

    default:
      return state;
  }
}


export default cartReducer;