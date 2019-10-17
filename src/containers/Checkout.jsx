import React from 'react';
import { connect } from 'react-redux';
import { deleteItem, priceDifference } from '../actions';
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  const { cart, total } = props;

  const handleDeleteItem = (item) => {
    props.deleteItem(item);
    props.priceDifference(item);
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map(item => (
          <div className="Checkout-item" key={item.id}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>{item.quantity}</span>
              <span>
                $
                {item.price}
              </span>
            </div>
            <button type='button' onClick={() => handleDeleteItem(item)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>

      <div className="Checkout-sidebar">
        <h3>Precio Total:</h3>
        <h4>
          $
          {total}
        </h4>
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
    total: state.total,
  };
};

const mapDispatchToProps = {
  deleteItem,
  priceDifference,
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);