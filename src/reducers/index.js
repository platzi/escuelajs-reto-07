const reducer = (state, action) => {
  const item = state.cart.find(list => list.id === action.payload.id);

  switch (action.type) {
    case 'ADD_TO_CART':
      if (item) {
        item.quantity += 1
        return {
          ...state,
          total: state.total + item.price
        }
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.price
      }
    case 'ADD_TO_PRICE':
      return {
        ...state,
        total: state.total + action.payload
      }
    case 'DELETE_ITEM':
      if (item.quantity === 1) {
        return {
          ...state,
          cart: state.cart.filter(product => product.id !== action.payload.id),
          total: state.total - item.price
        }
      }
      return {
        ...state,
        cart: [...state.cart]
      }
    case 'PRICE_DIFFERENCE':
      if (item.quantity > 1) {
        item.quantity -= 1
        return {
          ...state,
          total: state.total - item.price
        }
      }
      return {
        ...state,
        total: state.total - item.price
      }
    default:
      return state;
  }
}

export default reducer;