import * as actions from './actionTypes';

export const ADD_TO_CART = payload => ({
  type: actions.ADD_TO_CART,
  payload,
});


export const REMOVE_FROM_CART = payload => ({
  type: actions.REMOVE_FROM_CART,
  payload
});

export const REFRESH_TOTAL = ( ) => ({
  type: actions.REFRESH_TOTAL,
  payload: null
});