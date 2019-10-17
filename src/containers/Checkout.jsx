import React from 'react';
import { connect } from 'react-redux';
//Tercer problema, eliminar item
import { deleteToCart } from '../actions/index';
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  const { cart } = props;

//Tercer problema, eliminar item
  const onHandleDeleteItem = (item) => {
    props.deleteToCart(item);
  }

  //Cuarto problema, suma total items
  const totalPrice = () => {
      return cart.reduce((price, item) => price + item.price, 0);
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
            {/* Tercer problema, eliminar item */}
            <i className="fas fa-trash-alt"  onClick={() => onHandleDeleteItem(item.id)}/>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          
    {/* Cuarto problema, suma total items */}
          <h4>$ {totalPrice()}</h4>
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

//Tercer problema, eliminar item
const mapDispatchToProps = {
  deleteToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);