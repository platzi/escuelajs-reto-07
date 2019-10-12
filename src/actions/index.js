const actions = {
  addToCart: payload => ({
    type: 'ADD_TO_CART',
    payload,
  }),
  removeFromCart: payload => ({
    type: 'REMOVE_FROM_CART',
    payload,
  }),
}


export default actions;