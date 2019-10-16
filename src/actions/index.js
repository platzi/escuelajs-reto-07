const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

const rmFromCar = payload => ({
  type: 'REMOVE_FROM_CAR',
  payload,
});

export {
  addToCart,
  rmFromCar
};