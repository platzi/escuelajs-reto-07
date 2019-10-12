export const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});
export const deleteItem = payload => ({
  type: 'DELETE_TO_CART',
  payload,
});
export const calcTotal = payload => ({
  type: 'CALC_TOTAL',
  payload,
});
