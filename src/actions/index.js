const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

const removeToCart = payload => ({
  type: 'REMOVE_TO_CART',
  payload,
})

const actions = {
  addToCart,
  removeToCart,
};

export default actions;