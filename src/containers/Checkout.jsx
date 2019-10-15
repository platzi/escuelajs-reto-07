import React from 'react';
import { connect } from 'react-redux';
import CheckoutItem from '../components/CheckoutItem';
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  const { cart } = props;
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map((item, index) => {
            const keyItem = index;
            return <CheckoutItem key={keyItem} keyItem={keyItem} {...item} />;
          })
        }
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

export default connect(mapStateToProps, null)(Checkout);
