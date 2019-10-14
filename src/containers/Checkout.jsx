import React from 'react';
import { connect } from 'react-redux';
import { deleteItemCar } from '../actions';
import '../styles/components/Checkout.styl';

const Checkout = props => {
  const { cart } = props;

  const handleDeleteItem = deleteItemId => {
    props.deleteItemCar(deleteItemId);
  };

  const handlePriceTotal = () => {
    return cart.reduce(
      (totalPrice, initialPrice) => totalPrice + initialPrice.price,
      0
    );
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
              className="fas fa-trash-alt"
              onClick={() => {
                handleDeleteItem(item.id);
              }}
            />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>
            {handlePriceTotal()}
            $USD
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
  deleteItemCar,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
