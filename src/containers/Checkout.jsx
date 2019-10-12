import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  const { cart } = props;

  const handleRemove = (index) => {
    props.removeFromCart(index);
  }

  const price = React.useMemo(
    () =>  cart.reduce((sum, p) => sum + p.price, 0),
    [cart],
  );

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map((item, index) => (
          <div className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
            <button type="button" onClick={() => handleRemove(index)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>
            <span>$</span>
            {price}
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
  removeFromCart: actions.removeFromCart,
};


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);