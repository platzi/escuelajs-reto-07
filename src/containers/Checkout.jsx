import React from 'react';
import { connect } from 'react-redux';
import {removeFromCart} from '../actions/index';
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  const {cart} = props;

  const handleRemoveProduct = (prod,item) => {
    const newCart = prod.filter(product => product.id !== item.id)
    props.removeFromCart(newCart);
  }
  const calcularCosto = (prod) => {
    const total = prod.reduce((acumulator, currentValue)=>{
      return acumulator + currentValue.price;
    },0)

    return total;
  }
  
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
            <button onClick={() => handleRemoveProduct(cart, item)} type="button"><i className="fas fa-trash-alt" /></button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>{calcularCosto(cart)}</h4>
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
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);