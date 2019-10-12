const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});
const deleteToCart = payload => ({
  type: 'DELETE_TO_CART',
  payload,
});
const calculateTotal = payload => ({
  type:'CALCULATE_TOTAL',
  payload
});

// eslint-disable-next-line import/prefer-default-export
export { addToCart, deleteToCart, calculateTotal };
