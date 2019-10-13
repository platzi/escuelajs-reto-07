/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import '../styles/components/Checkout.styl';
import { deleteFromCart } from '../actions';

const Checkout = (props) => {
  const { cart } = props;
  const handleDeleteFromCart = (itemId) => {
    props.deleteFromCart(itemId)
  };
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
            <i 
              className='fas fa-trash-alt'
              onClick={() => handleDeleteFromCart(item.id)}
              role='button'
              tabIndex='0'
            />
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
  deleteFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);