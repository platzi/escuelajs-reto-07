const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
          totalPrice: state.totalPrice + action.payload.price
      };
    case 'REMOVE_FROM_CART': {
      const removed = state.cart.splice(action.payload, 1)[0];
      return {
        ...state,
        cart: [...state.cart],
        totalPrice: state.totalPrice - removed.price
      }
    };
  default:
    return state;
  }
}

export default reducer;