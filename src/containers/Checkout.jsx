import React from 'react';
import { connect } from 'react-redux';
import { deleteCart } from '../actions/index';
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  const { cart } = props;

  const handleClickDeleteProduct = (id) => {
    props.deleteCart(id);
  }

  const calcTolalPrice = () => {
    return cart.reduce((price, item) => price + item.price, 0);
  }
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map(item => (

          <div className="Checkout-item" key={`product${item.id}`}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
            <i
              className="fas fa-trash-alt"
              onClick={() => handleClickDeleteProduct(item.id)}
            />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>$ {calcTolalPrice()}</h4>
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
  deleteCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);