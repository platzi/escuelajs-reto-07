import React from 'react';
import { connect } from 'react-redux';
import { removeToCart } from '../actions'
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  const { cart } = props;
  const handleRemoveToCart = (id) => {
    props.removeToCart(id);
  };
  const handleTotalPrice = () => {
    const reducer = (accumulate, current) => accumulate + current;
    const totalPrice = cart.map(item => item.price).reduce(reducer);
    return totalPrice;
  };
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map(item => (
          <div className="Checkout-item" key={item.id}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
            <i 
              role="button"
              tabIndex="0"
              className="fas fa-trash-alt" 
              onClick={() => handleRemoveToCart(item.id)}
              onKeyPress={() => handleRemoveToCart(item.id)}
            />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>{handleTotalPrice()}</h4>
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