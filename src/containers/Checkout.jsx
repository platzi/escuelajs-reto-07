/* eslint-disable react/jsx-indent */
import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions';
import '../styles/components/Checkout.styl';

const Checkout = props => {
  const { cart, totalPrice } = props;

  const handleRemoveFromCart = product => {
    props.removeFromCart(product);
  };
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map(item => (
          <div key={item.uid} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
                 
                {`$ ${item.price} MXN`}
              </span>
            </div>
            <button type="button" onClick={() => handleRemoveFromCart(item)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>
            
            {`$ ${totalPrice} MXN`}
          </h4>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
    totalPrice: state.totalPrice,
  };
};

const mapDispatchToProps = {
  removeFromCart,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
