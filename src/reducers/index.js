const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total_price: state.total_price + action.payload.price,
      }
    case 'REMOVE_TO_CART': {
      let hasNotBeenRemoved = true;

      return {
        ...state,
        cart: state.cart.filter(product => {
          if(product.id == action.payload.id && hasNotBeenRemoved) {
            hasNotBeenRemoved = false;
            return false;
          }
          return true;
        }),
        total_price: state.total_price - action.payload.price,
      }
    }
    default:
      return state;
  }
}

export default reducer;
