import React from 'react';
import { removeToCart } from '../actions';
import { connect } from 'react-redux';
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  const { cart, isList } = props;
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map(item => (
          <div className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
          
            <i className="fas fa-trash-alt" onClick={() => props.removeToCart(item.id)}/>
          </div>
        
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>{`$${cart.reduce((acum,{price}) => acum + price,0)}`}</h4>
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

export default connect(mapStateToProps, { removeToCart })(Checkout);