const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalCart: state.totalCart + Number(action.payload.price),
      }
    case 'DELETE_PRODUCT':
      return {
        ...state,
        cart: state.cart.filter(items => items.id !== action.payload.id ),
        totalCart: state.totalCart - Number(action.payload.price),
      }
    default:
      return state;
  }
}

export default reducer;