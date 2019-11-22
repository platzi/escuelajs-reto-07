export const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

export const deleteItem = payload => ({
  type: 'DELETE_ITEM',
  payload,
});

export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = payload => ({
  type: 'LOGOUT_REQUEST',
  payload,
});


export const registerRequest = payload => ({
  type: 'REGISTER_REQUEST',
  payload,
});