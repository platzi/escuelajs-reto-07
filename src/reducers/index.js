const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case 'REMOVE_FROM_CART': {
      const newCart = [...state.cart];
      newCart.splice(action.payload, 1);
      return {
        ...state,
        cart: newCart,
      }
    }
    default:
      return state;
  }
}

export default reducer;