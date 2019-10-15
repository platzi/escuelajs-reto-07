const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: [...action.payload]
      }
    default:
      return state;
  }
}

export default reducer;