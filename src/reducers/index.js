const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.price,
      }
    case 'DELETE_TO_CART':
      return {
        ...state,
        cart: state.cart.filter(items => items.id !== action.payload.id ),
        total: state.total - action.payload.price,
    }
    default:
      return state;
  }
}

export default reducer;