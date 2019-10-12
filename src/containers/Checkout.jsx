import React from 'react';
import { connect } from 'react-redux';
import '../styles/components/Checkout.styl';
import { removeFromCart } from '../actions';

const Checkout = props => {
  const { cart, totalPrice } = props;

  const handleRemoveFromCart = elementPos => {
    props.removeFromCart(elementPos);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map((item, index) => (
          <div key={index} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <i
              className="fas fa-trash-alt"
              onClick={() => handleRemoveFromCart(index)}
            />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>$ {totalPrice}</h4>
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
