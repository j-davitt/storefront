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


// not working below
export const setCategories = (categories) => {
  return {
    type: 'INITIAL_SET',
    payload: categories,
  }
}

export const getCategories = () => async (dispatch) => {
  const response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  dispatch(setCategories(response.data.results));
}

