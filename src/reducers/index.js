const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case 'REMOVE_OF_CART':
      return {
        ...state,
        cart: state.cart.filter((products) => products.id !== action.payload),
      }
    default:
      return state;
  }
}

export default reducer;