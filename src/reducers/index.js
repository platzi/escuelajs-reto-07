const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case 'DELETE_PRODUCT': {
      return {
        ...state,
        cart: state.cart.filter(products => products.id  !== action.payload)
      }
    } 
    case 'SUM_PRICES': {
      return {
        ...state,
     // cart:  state.cart.reduce((sum, item) => (sum + item.price),0)
     //  cart:  state.cart.reduce((sum) => (sum + action.payload),0)
     
      }
    }  
    default:
      return state;
  }
}

export default reducer;