const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

const deleteProduct = payload => ({
  type: 'DELETE_PRODUCT',
  payload
});

export { addToCart, deleteProduct };