const reducer = (state, action) => {
  const itemId = state.cart.find((item) => item.id === action.payload.id);
  switch (action.type) {
    case 'ADD_TO_CART':
      if (itemId) return state;
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.price,
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        total: state.total - action.payload.price
      };
    default:
      return state;
  }
}

export default reducer;