import axios from "axios";

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


export const setCategories = (data) => {
  return {
    type: 'INITIAL_SET',
    payload: data,
  }
}

export const setProducts = (products) => {
  return {
    type: 'INITIAL_SET_PROD',
    payload: products,
  }
}

export const updateProduct = (product) => {
  return {
    type: 'UPDATE',
    payload: product,
  }
}

export const getCategories = () => async (dispatch) => {
  const response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  dispatch(setCategories(response.data.results));
}

export const getProducts = () => async (dispatch) => {
  const response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
  dispatch(setProducts(response.data.results));
}

export const updateProductAPI = (product) => async (dispatch) => {
  product.inStock--;
  const response = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, product);
  dispatch(updateProduct(response.data));
}
