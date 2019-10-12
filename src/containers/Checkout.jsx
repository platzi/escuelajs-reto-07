import React from 'react';
import { connect } from 'react-redux';
import { removeToCart } from '../actions';
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  const { cart } = props;

  const handleRemoveToCart = (item) => {
    props.removeToCart(item);    
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map((item, idx) => (
          <div className="Checkout-item" key={idx.toString()}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
            <button type='button' onClick={() => handleRemoveToCart(idx)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>
            $ 
            {
              ` ${cart.reduce((a, b) => (a + b.price), 0)}`
            }
          </h4>
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
  removeToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);