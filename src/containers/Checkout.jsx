import React from 'react';
import { connect } from 'react-redux';
import { removeToCart } from '../actions';
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  const { cart } = props;
  const handleRemoveToCart = (itemId) => {
    props.removeToCart(itemId);
  };
const total = () => {
  const reducer = (accumulate, current) => accumulate + current;
  const total = cart.map(item => item.price).reduce(reducer);
  return total;
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
            <i className="fas fa-trash-alt" />
            <button className="btn" type="button" onClick={() => handleRemoveToCart(item.id)}><i className="fas fa-trash-alt"/></button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>$</h4>
          <h4>${total()}</h4>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);