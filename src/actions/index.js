export const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

export const addMoreProduct = payload => ({
  type: 'ADD_MORE_PRODUCT',
  payload,
});

export const reduceProduct = payload => ({
  type: 'REDUCE_PRODUCT',
  payload,
});

export const removeProduct = payload => ({
  type: 'REMOVE_PRODUCT',
  payload,
});