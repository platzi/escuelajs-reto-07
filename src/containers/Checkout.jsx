import React from 'react';
import { connect } from 'react-redux';
import '../styles/components/Checkout.styl';
import { deleteToCart, calculateTotal } from '../actions';

const Checkout = (props) => {
  const { cart, total } = props;

  function handleDeleteCart(id) {
    props.deleteToCart(id);
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
            <button type='button' onClick={() => handleDeleteCart(index)}>
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
            {' '}
            {total}
          </h4>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
    total: state.total,
  };
};

const mapDispatchToProps = {
  deleteToCart,
  calculateTotal
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
