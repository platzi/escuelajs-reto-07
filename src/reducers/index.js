/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.price,
      }
      case 'REMOVE_TO_CART':
        return {
          ...state,
          cart: removeOnlyOneElement(state.cart, action.payload.id),
          total: state.total - action.payload.price,
      }      
    default:
      return state;
  }
}

const removeOnlyOneElement = (items, itemId) => {
  const newCart = [];
  let isRepeat = false;
  for (const item of items) {
    if (item.id === itemId && !isRepeat) {
      isRepeat = true;
    } else {
      newCart.push(item);
    }
  }
  return newCart;
}

export default reducer;