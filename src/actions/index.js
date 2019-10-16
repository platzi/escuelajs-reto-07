const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

const removeItem = payload => ({
  type: 'REMOVE_ITEM',
  payload,
});

export default { addToCart, removeItem };
