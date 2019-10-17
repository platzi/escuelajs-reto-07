const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

const removeToCart = payload => ({
  type:'REMOVE_TO_CART',
  payload,
});

export { addToCart };
export { removeToCart }
