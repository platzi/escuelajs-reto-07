import React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions';

import '../styles/components/Checkout.styl';
import actions from '../actions';

const Checkout = (props) => {
  const { cart, removeToCart } = props;

  const handleRemoveToCart = (item) => {
    props.removeToCart(item);
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map((item, key) => (
          <div className="Checkout-item" key={key}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
            <i className="fas fa-trash-alt" onClick={() => handleRemoveToCart(item)}/>
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

const mapDisptachToProps = {
  removeToCart: actions.removeToCart,
}

export default connect(mapStateToProps, mapDisptachToProps)(Checkout);
