import { ADD_TO_CART, REMOVE_FROM_CART} from '../types/cartTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: 
          state.cart.filter(
            cart => cart.id !== action.payload
          )
      }
    default:
      return state;
  }
}

export default reducer;