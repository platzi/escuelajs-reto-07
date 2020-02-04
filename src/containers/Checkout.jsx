import React from 'react';
import { connect } from 'react-redux';
import { deleteToCart } from '../actions';
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  const { cart } = props;
  const handleDeleteCart = (index) => {
    props.deleteToCart(index);
  }
  
  const total = cart.reduce(
    (totalValue, currentValue) => {
      return totalValue + currentValue.price
    },
    0
  )
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
            <button type='button' onClick={() => handleDeleteCart(index)} className="fas fa-trash-alt" />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>
            $
            {total}
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
  deleteToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);