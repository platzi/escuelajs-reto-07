export const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

export const deleteFromCart = payload => ({
  type: 'DELETE_FROM_CART',
  payload,
});

export const plusToTotalCost = payload => ({
  type: 'PLUS_TO_TOTAL_COST',
  payload,
});

export const removeFromTotalCost = payload => ({
  type: 'REMOVE_FROM_TOTAL_COST',
  payload,
});