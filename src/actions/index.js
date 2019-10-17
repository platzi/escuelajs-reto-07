export const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

export const addToPrice = payload => ({
  type: 'ADD_TO_PRICE',
  payload,
});

export const deleteItem = payload => ({
  type: 'DELETE_ITEM',
  payload,
});

export const priceDifference = payload => ({
  type: 'PRICE_DIFFERENCE',
  payload,
});
