const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
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
        })
      }
    }
    default:
      return state;
  }
}

export default reducer;
