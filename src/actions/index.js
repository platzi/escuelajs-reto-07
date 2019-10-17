
const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

const deleteFromCart = payload =>({
    type: 'DELETE_FROM_CART',
    payload,
  });

export  { addToCart, deleteFromCart };