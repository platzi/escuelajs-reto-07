import React from 'react';
import { connect } from 'react-redux';
import { deleteProduct } from '../actions'
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  const { cart } = props;
  var total = 0;

  const handleDeleteProduct = (itemId) => {
      props.deleteProduct(itemId)
  }
  
  cart.map(item => total+= item.price );

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
            <i 
              className="fas fa-trash-alt" 
              onClick={() => handleDeleteProduct(index) }
            />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>{total}</h4>
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
  deleteProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);