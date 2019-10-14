import React from 'react';
import { connect } from 'react-redux';
import CheckoutItem from '../components/CheckoutItem';
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  const { cart, totalCost } = props;
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map((item, index) => (
          <CheckoutItem key={`${item.id}${index}`} index={index} {...item} />
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>
            $
            {totalCost}
          </h4>
        </div>
      )}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
    totalCost: state.totalCost,
  };
};

export default connect(mapStateToProps, null)(Checkout);