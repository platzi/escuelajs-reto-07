import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions';
import '../styles/components/Checkout.styl';
import Products from '../components/Products';

const Checkout = (props) => {
  const { cart } = props;
  const handleRemoveProduct = (prodcuts, item) => {
    const newCart = prodcuts.filter(product => product.id !== item.id)
    props.removeFromCart(newCart)
  }

  const calculateTotal = products => {
    const price = products.reduce((accumulator, actualProduct) => {
      return accumulator + actualProduct.price
    },0)
    return price
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map((item, index) => (
          <div className="Checkout-item" key={index}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
            <i onClick={() => handleRemoveProduct(cart, item)} className="fas fa-trash-alt" />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>${calculateTotal(cart)}</h4>
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
