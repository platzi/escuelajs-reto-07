// eslint-disable-next-line import/prefer-default-export
export const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

export const deleteToCart = payload => ({
  type: 'DELETE_TO_CART',
  payload,
});