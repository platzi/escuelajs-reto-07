const reducer = (state, action) => {

  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.price,
      }
      case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((items,index) => index !==  action.payload.index),
        total: state.total - action.payload.item.price,
      }
    case 'TOTAL_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
    }
    default:
      return state;
  }
}

export default reducer;