
const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    { name: 'Apples', category: 'food', price: .99, inStock: 500 },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
  ],
  activeCategory: ''
};

const categoriesReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SET_CATEGORY':
      return {
        ...state,
        activeCategory: action.payload.name,
        products: initialState.products,
      }
    case 'FILTER_PRODUCTS':
      return {
        ...state,
        products: state.products.filter(e => e.category === state.activeCategory)
      }
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export const setCategory = (category) => {
  return {
    type: 'SET_CATEGORY',
    payload: category,
  }
};

export const filterProducts = () => {
  return {
    type: 'FILTER_PRODUCTS',
    payload: {},
  }
};

export const reset = () => {
  return {
    type: 'RESET',
    payload: {},
  }
};


export default categoriesReducer;
