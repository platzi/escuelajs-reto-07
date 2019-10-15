import React from 'react';
import { connect } from 'react-redux';
import '../styles/components/Checkout.styl';
import { deleteFromCart } from '../actions';

const Checkout = props => {
  const { cart = {} } = props;
  const withProdocuts = cart.length > 0;
  
  const handleDeleteFromCart = itemId => {
    props.deleteFromCart(itemId);
  };

  console.log("pase")
  const total = Object.values(cart).reduce((t, {price}) => t + price, 0)

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {withProdocuts ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {withProdocuts ? (
          cart.map((item, index) => {
            return (
              <div className="Checkout-item" key={index}>
                <div className="Checkout-element">
                  <h4>{item.title}</h4>
                  <span>{`$${item.price}`}</span>
                </div>
                <i
                  className="fas fa-trash-alt"
                  onClick={() => {
                    handleDeleteFromCart(index);
                  }}
                />
              </div>
            );
          })
        ) : (
          <div
            onClick={() => {
              props.history.push('/');
            }}
          >
            Selecciona los productos de tu agrado y regresa nuevamente!
          </div>
        )}
      </div>

      {withProdocuts && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>{`$ ${total}`}</h4>
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
