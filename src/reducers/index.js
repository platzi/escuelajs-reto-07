const deleteItemCart = (cartActual, deleteIndex) => {
  return cartActual.filter((item, index) => index !== deleteIndex);
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case 'DELETE_TO_CART':
      return {
        ...state,
        cart: deleteItemCart(state.cart, action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
