import React from 'react';
import { connect } from 'react-redux';
import '../styles/components/Checkout.styl';
import { deleteToCart } from '../actions';

const Checkout = (props) => {
  const { cart, totalCart } = props;

const handleDeleteToCart = (id) => {
  props.deleteToCart(id);
}

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
            <button type="button" onClick={() => handleDeleteToCart(index)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>
            $
            {totalCart}
          </h4>
        </div>
      )}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
    totalCart: state.cart.length > 0 ? (state.cart.map(item => item.price).reduce((prev, next) => prev + next) ) : 0
  };
};


const mapDispatchToProps = {
  deleteToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);