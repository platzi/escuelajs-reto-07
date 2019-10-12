export const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

export const removeToCart = payload => ({
  type: 'DELETE_TO_CART',
  payload,
});
