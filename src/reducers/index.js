const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...action.payload,
            uid:
              state.cart.length === 0
                ? state.cart.length
                : state.cart[state.cart.length - 1].uid + 1,
          },
        ],
        totalPrice: state.totalPrice + action.payload.price,
      };

    case 'REMOVE_FROM_CART': {
      const cartx = [...state.cart];
      const itemIndex = cartx.indexOf(action.payload);
      cartx.splice(itemIndex, 1);

      return {
        ...state,
        cart: cartx,
        totalPrice: state.totalPrice - action.payload.price,
      };
    }

    default:
      return state;
  }
};

export default reducer;
