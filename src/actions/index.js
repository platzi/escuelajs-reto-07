const addToCart = (payload) => ({
  type: 'ADD_TO_CART',
  payload,
});

const updateToCart = (payload) => ({
  type: 'UPDATE_TO_CART',
  payload,
});

const deleteToCart = (payload) => ({
  type: 'DELETE_TO_CART',
  payload,
});

export {addToCart, updateToCart, deleteToCart};
