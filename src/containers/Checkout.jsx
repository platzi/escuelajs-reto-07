import React from 'react';
import { connect } from 'react-redux';
import '../styles/components/Checkout.styl';
import action from '../actions/index';

const Checkout = ({ cart, totalPrice, removeItem }) => {
  const handleRemoveItem = product => {
    removeItem(product);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map(item => (
          <div key={Math.random()} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>

            <i
              onClick={() => handleRemoveItem(item)}
              onKeyPress={() => handleRemoveItem(item)}
              role="button"
              tabIndex="0"
              className="fas fa-trash-alt"
            />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>{`$ ${totalPrice}`}</h4>
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
  removeItem: action.removeItem,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
