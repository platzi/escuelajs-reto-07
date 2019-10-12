import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions'
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  const { cart } = props;

  const remove = product => () => {
    props.removeFromCart(product)
  }

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
            <button
              type="button"
              onClick={remove(item)}
            >
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>
            Precio Total:
            {cart.reduce((a, b) => a.price + b.price)}
          </h3>
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
  removeFromCart: actions.removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);