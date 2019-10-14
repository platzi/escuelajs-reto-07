import React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions';

import '../styles/components/Checkout.styl';
import actions from '../actions';

const Checkout = (props) => {
  const { cart, removeToCart, total_price } = props;

  const handleRemoveToCart = (item, key) => {
    props.removeToCart(item, key);
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
            <i className="fas fa-trash-alt" onClick={() => handleRemoveToCart(item, key)}/>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>${total_price}</h4>
        </div>
      )}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
    total_price: state.total_price,
  };
};

const mapDisptachToProps = {
  removeToCart: actions.removeToCart,
}

export default connect(mapStateToProps, mapDisptachToProps)(Checkout);
