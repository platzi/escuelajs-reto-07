import React from 'react';
import { connect } from 'react-redux';
import '../styles/components/Checkout.styl';
import { removeFromCart } from '../actions/index';

const Checkout = (props) => {
  const { cart } = props;

  const handleRemove = (id)=>{
    props.removeFromCart(id)
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map(item => (
          <div key={item.id} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
            <button type='button' onClick={()=>handleRemove(item.id)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>$</h4>
          <h4>
            {cart.reduce((acum, item) => acum + item.price, 0)}
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

const machDispatchToProps = {
  removeFromCart,
};

export default connect(mapStateToProps, machDispatchToProps)(Checkout);