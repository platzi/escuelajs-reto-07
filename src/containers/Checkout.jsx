import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  const { cart, removeToCart } = props;

  const handleRemoveToCart = (product) => {
    removeToCart(product)
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map(item => (
          <div className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
            <a onClick={() => handleRemoveToCart(item)}>
              <i className="fas fa-trash-alt" />
            </a>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>$</h4>
        </div>
      )}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeToCart: actions.removeToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);