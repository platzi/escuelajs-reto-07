const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

const removeFromCart = payload => ({
  type: 'REMOVE_FROM_CART',
  payload,
});

const totalToCart = payload => ({
  type: 'TOTAL_TO_CART',
  payload,
});

export { addToCart, removeFromCart, totalToCart };