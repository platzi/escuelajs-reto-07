import React from 'react';
import { connect } from 'react-redux';
import { rmFromCar } from '../actions';
import '../styles/components/Checkout.styl';

const Checkout = props => {
  const { cart } = props;

  const handleRmFromCar = cartId => {
    props.rmFromCar(cartId);
  };

  let totalPrice = 0;
  cart.forEach(item => (totalPrice += item.price));

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map((item, index) => (
          <div className="Checkout-item">
            <div className="Checkout-element" key={cart.id}>
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <i
              className="fas fa-trash-alt"
              onClick={() => handleRmFromCar(index)}
            />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>${totalPrice}</h4>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  rmFromCar,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
