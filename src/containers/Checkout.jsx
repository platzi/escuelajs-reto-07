import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { deleteFromCart } from '../actions';
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  const { cart } = props;
  let totalPrice = 0;

  const handleDeleteFromCart = (itemID) => {
    props.deleteFromCart(itemID)
  }
  
  // calculate total
  cart.map(item => {
    totalPrice = item.price + totalPrice;
  });

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
            <i className="fas fa-trash-alt" onClick={() => handleDeleteFromCart(item.id)}/>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>Precio Total:</h3>
            <h3> $
              {totalPrice}
            </h3>
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

Checkout.propTypes = {
  id: propTypes.number, 
  image: propTypes.string, 
  title: propTypes.string, 
  price: propTypes.number, 
  description: propTypes.number,

}


const mapDispatchToProps = {
  deleteFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);