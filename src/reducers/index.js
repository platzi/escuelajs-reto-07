const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'DELETE_FROM_CART':
      return {
        ...state,
        // cart: state.cart.filter(items => items.index !== action.payload),
        // cart: state.cart.filter((items, index) => index !== action.payload),
        cart: state.cart.filter((items, index) => index !== action.payload),
      };
    case 'GET_TOTALPRICE':
      return {
        ...state,
        totalPrice: state.cart.reduce((total, item) => {
          return total + item.price;
        }, 0),
      };
    default:
      return state;
  }
};

export default reducer;
