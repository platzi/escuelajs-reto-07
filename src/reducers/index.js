const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case 'ADD_MORE_PRODUCT':
      return {
        ...state,
        cart: state.cart.map(product => {
          if(product.id===action.payload){
            return {...product, quantity: product.quantity+1}
          }
          return product
        }
        )
      }
      case 'REDUCE_PRODUCT':
        return {
          ...state,
          cart: state.cart.map(product => {
            if(product.id===action.payload){
              return {...product, quantity: product.quantity-1}
            }
            return product;
          }
          )
        }
        case 'REMOVE_PRODUCT':
          return {
            ...state,
            cart: state.cart.filter(product => {
              if(product.id===action.payload){
                return false;
              }
              return true;
            })
          }
    default:
      return state;
  }
}

export default reducer;