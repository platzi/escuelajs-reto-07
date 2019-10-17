import React from 'react';
import { connect } from 'react-redux';
import '../styles/components/Checkout.styl';
import { removeFromCart } from '../actions';

const Checkout = (props) => {
  const { cart } = props;


  const handleCartItems = (elementIndex) => {
    props.removeFromCart(elementIndex)
  }

  return (
    <div className="Checkout">
      {console.log(props)}
      {console.log(cart.filter(items => items.id !== 3))}
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map((item, index) => (
          <div key={index} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
            <i className="fas fa-trash-alt" onClick={() => handleCartItems(index)} />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>$</h4>
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

const mapDispathToProps = {
  removeFromCart,
}

export default connect(mapStateToProps, mapDispathToProps)(Checkout);