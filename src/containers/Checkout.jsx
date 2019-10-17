import React from 'react';
import { connect } from 'react-redux';
import '../styles/components/Checkout.styl';
import { REMOVE_FROM_CART, REFRESH_TOTAL } from '../actions'

const Checkout = (props) => {
  const { cart, total } = props;

  const handleRemoveFromCart = (productId) => {
    props.REMOVE_FROM_CART(productId)
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map((item, index) => (
          <div className="Checkout-item" key={index}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <h4>{item.amount}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
            <i 
              className="fas fa-trash-alt"
              onClick={()=> handleRemoveFromCart(item.id)} />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>$ {total}</h4>
        </div>
      )}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
    total: state.total
  };
};

const mapDispatchToProps = {
  REMOVE_FROM_CART,
  REFRESH_TOTAL
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);