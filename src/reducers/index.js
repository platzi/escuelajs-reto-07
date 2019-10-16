const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalPrice: (state.totalPrice || 0) + action.payload.price,
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter(p => {
          return p.id !== action.payload.id;
        }),
        totalPrice: (state.totalPrice || 0) - action.payload.price,
      };
    default:
      return state;
  }
};

export default reducer;
