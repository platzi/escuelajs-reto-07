import React from 'react';
import { connect } from 'react-redux';
import '../styles/components/Checkout.styl';
import { deleteToCart } from '../actions/';

const Checkout = props => {
  const { cart } = props;

  const handleDelete = carDeleted => {
    props.deleteToCart(carDeleted);
  };
  let totalPrice = 0;
  const sumToTotal = price => {
    totalPrice += price;
    return '';
  };
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map((item, idx) => (
          <div key={item.idx} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
              {sumToTotal(item.price)}
            </div>
            <i onClick={() => handleDelete(idx)} className="fas fa-trash-alt" />
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
  deleteToCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
