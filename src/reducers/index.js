/* eslint-disable no-case-declarations */
import * as actions from '../actions/actionTypes';

//= ============================================HELPERS=================================
const hasOnlyOne = (product) => product.amount === 1 ? true : false;
const removeProductById = (products, productId) => products.filter(product => product.id !== productId); 
const decrementAmount = (products, productId) => products.map(product => {
  return {
    ...product,
    amount: product.id === productId ? product.amount - 1 : product.amount
  }
});
const incrementAmount = (products, productId) => products.map(product => {
  return {
    ...product,
    amount: product.id === productId ? product.amount + 1 : product.amount
  }
});
const getIndex = (products, productId) =>  products.findIndex(product => product.id === productId);
const alreadyInCart = (products, productId) => products.some( product => product.id === productId); 

//= ============================================REDUCERS=================================
const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TO_CART: {
      const { cart } = state;
      let productId = action.payload.id;
      let isInCart = alreadyInCart(cart, productId);
      return {
        ...state,
        cart: isInCart ? incrementAmount(cart, productId) : [...state.cart, action.payload]
      }
    } case actions.REMOVE_FROM_CART: {
      const { cart } = state;
      const productId = action.payload;
      const index = getIndex(cart, productId);
      let newCart;
      if (hasOnlyOne(cart[index])) {
          newCart = removeProductById(cart, productId);
      } else {
          newCart = decrementAmount(cart, productId);
      }

      return {
        ...state,
        cart: newCart
      }
    } case actions.REFRESH_TOTAL: {
      return {
          ...state,
          total: state.cart.reduce( (total, { price, amount }) => total + price * amount, 0),
      }
    } default:
      return state;
  }
}

 

export default reducer;