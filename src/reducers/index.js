const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + Number(action.payload.price)
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        cart: state.cart.filter((item, index) => {
         return index !== action.payload.index
        }),
        total: state.total - Number(action.payload.item.price)
      };
    default:
      return state;
  }
};

export default reducer;
