const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total_price: state.total_price + action.payload.price,
      }
    case 'REMOVE_TO_CART': {
      state.cart.splice(action.payload.key, 1);
      return {
        ...state,
        cart: state.cart,
        total_price: state.total_price - action.payload.item.price,
      }
    }
    default:
      return state;
  }
}

export default reducer;
