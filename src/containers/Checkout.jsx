import React from 'react';
import { connect } from 'react-redux';
import '../styles/components/Checkout.styl';
import { deleteFromCart, getTotalPrice } from '../actions';

const Checkout = props => {
  const { cart = {}, totalPrice } = props;
  const withProdocuts = cart.length > 0;

  console.log(props)
  const handleDeleteFromCart = itemId => {
    props.deleteFromCart(itemId);
    props.getTotalPrice();
  };

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
          <h4>{`$ ${totalPrice}`}</h4>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
    totalPrice: state.totalPrice,
  };
};

const mapDispatchToProps = {
  deleteFromCart,
  getTotalPrice,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
