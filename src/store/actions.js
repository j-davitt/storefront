export const setCategory = (category) => {
  return {
    type: 'SET',
    payload: category,
  }
};

export const reset = () => {
  return {
    type: 'RESET',
    payload: {},
  }
};

export const addToCart = (product) => {
  return {
    type: 'ADD',
    payload: product,
  }
};

export const removeFromCart = (product) => {
  return {
    type: 'REMOVE',
    payload: product,
  }
};

