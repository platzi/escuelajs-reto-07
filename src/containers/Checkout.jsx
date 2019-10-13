import React from 'react';
import { connect } from 'react-redux';
import { deleteFromCart } from '../actions';
import '../styles/components/Checkout.styl';

const Checkout = props => {
  const { cart } = props;

  const handleDeleteFromCart = productIndex => {
    props.deleteFromCart(productIndex);
  };

  const handleTotalPrice = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const addition = cart.reduce(reducer, 0);
    return addition;
  };
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
            <i
              role="button"
              tabIndex={0}
              className="fas fa-trash-alt"
              onClick={() => handleDeleteFromCart(index)}
            />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>
            $
            {handleTotalPrice()}
          </h4>
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
  deleteFromCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
