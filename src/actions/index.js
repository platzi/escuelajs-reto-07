export const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

export const deletProduct = payload =>({
  type : 'DELETE_PRODUCT',
  payload,
})

export default (addToCart, deletProduct)