const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

const removeToCart = (item ,key) => ({
  type: 'REMOVE_TO_CART',
  payload: {
    item,
    key
  },
});

export default {
  addToCart,
  removeToCart
}
