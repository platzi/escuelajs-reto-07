export const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

export const removeProduct = payload => ({
  type: 'REMOVE_PRODUCT',
  payload,
});