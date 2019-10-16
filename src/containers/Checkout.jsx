import React from 'react';
import { connect } from 'react-redux';
import { deleteToCart } from '../actions';
import '../styles/components/Checkout.styl';

const Checkout = props => {
  const handleDeleteCart = id => {
    props.deleteToCart(id);
  };
  //const precio = props.cart.map(item => item.price + Number(item.price));
  // for (let index = 0; index < props.cart.length; index++) {
  // }

  const sum = props.cart.reduce((suma, item) => suma + item.price, 0);

  console.log(sum);

  const { cart } = props;
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map(item => (
          <div key={item.id} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <i
              className="fas fa-trash-alt"
              item-id={item.id}
              onClick={() => handleDeleteCart(item.id)}
            />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>${sum}</h4>
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
  deleteToCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
