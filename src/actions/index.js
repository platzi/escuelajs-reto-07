import { getRandomString } from '../utils';

export const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload: {...payload, randId: getRandomString()},
});

export const removeFromCart = payload => ({
  type: 'REMOVE_FROM_CART',
  payload,
});

export default { addToCart, removeFromCart };
