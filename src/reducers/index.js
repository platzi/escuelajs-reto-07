const reducer = (state, action) => {
  let index = 0;

  switch (action.type) {
    case 'ADD_TO_CART':
      if (state.cart.length > 0) {
          index=state.cart.slice(state.cart.length-1)[0].key+1;
      }
      return {
        ...state,
        cart: [...state.cart, Object.assign({}, action.payload,{key: index})]
      }
    case 'DELETE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((items) => items.key !== action.payload)
      }
    default:
      return state;
  };
};

export default reducer;
