const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }

    case 'DELETE_FROM_CART': {
      return {
        ...state,
        cart: state.cart.filter((item,index) => index !== action.payload ),
      }
    }

    case 'PLUS_TO_TOTAL_COST':
      return {
        ...state,
        totalCost: state.totalCost + action.payload
      }
    
    case 'REMOVE_FROM_TOTAL_COST':
      return {
        ...state,
        totalCost: state.totalCost - action.payload
      }

    default:
      return state;
  }
}

export default reducer;