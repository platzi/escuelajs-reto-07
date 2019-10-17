export const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

 //Tercer problema, eliminar item
export const deleteToCart = payload => ({
  type: 'DELETE_TO_CART',
  payload,
});