const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case 'REMOVE_FROM_CART': {
      const repeatedProducts = state.cart.filter(product => product.id === action.payload.id)
      const differentProducts = state.cart.filter(product => product.id !== action.payload.id)
      let repeatedProduct = null

      if (repeatedProducts.length > 1) {
        [repeatedProduct] = repeatedProducts
      }

      const cart = repeatedProduct ? [...differentProducts, repeatedProduct] : [...differentProducts]

      return {
        ...state,
        cart
      }
    }
    default:
      return state;
  }
}

export default reducer;