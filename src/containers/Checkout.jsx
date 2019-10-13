import React from 'react';
import { connect } from 'react-redux';
import { deleteToCart } from '../actions'
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  const { cart } = props;
  console.log('carrito: ',{cart})
  const handleDeleteToCart = (itemId) => {
    props.deleteToCart(itemId)
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
            <i 
              role="presentation"
              className="fas fa-trash-alt" 
              onClick={() => handleDeleteToCart(item.id)} 
            />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h1>{cart.reduce(function (sum,{price}) { return sum + price; }, 0)}</h1>
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
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);