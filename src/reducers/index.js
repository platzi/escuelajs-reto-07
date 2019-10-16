const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'REMOVE_FROM_CAR':
      const newCart = state.cart.splice(action.payload, 1);
      return {
        ...state,
        cart: state.cart.filter(item => item !== newCart),
      };
    default:
      return state;
  }
};

export default reducer;