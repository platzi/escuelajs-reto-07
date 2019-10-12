// eslint-disable-next-line import/prefer-default-export
export const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

export const unsetFavorite = (payload) => ({
  type: 'UNSET_FAVORITE',
  payload,
});
