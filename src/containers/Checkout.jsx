import React from 'react';
import { connect } from 'react-redux';
import { reduceProduct, removeProduct, addMoreProduct } from '../actions';
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  const { cart } = props;

  const handleAddMoreProduct = (id) => {
    props.addMoreProduct(id);
  }

  const handleRemoveProduct = (id) => {
    const productIndex = cart.findIndex(item => id===item.id);
    if(cart[productIndex].quantity>1){
      props.reduceProduct(id);
    }else{
      props.removeProduct(id);
    }
  }

  const handleKeyUp = (event) => {
    event.preventDefault();
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.length > 0 && 
          (
            <div className="Checkout-item">
              <div className="Checkout-titles">
                <h4>Producto</h4>
                <h4>Precio / Cantidad</h4>
              </div>
            </div>
          )
        }
        {cart.map(item => (
          <div className="Checkout-item" key={item.id}>
            <h4>{item.title}</h4>
            <div className="Checkout-price">
              <span className="Checkout-price-value">
                $
                {item.price}
              </span>
              <i className="fas fa-minus-square" onClick={()=>handleRemoveProduct(item.id)} role="button" tabIndex={0} onKeyUp={handleKeyUp} />
              <span className="Checkout-price-quantity">
                {item.quantity}
              </span>
              <i className="fas fa-plus-square" onClick={()=>handleAddMoreProduct(item.id)} role="button" tabIndex={0} onKeyUp={handleKeyUp} />
            </div>
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

const mapDispatchToProps = {
  reduceProduct,
  removeProduct,
  addMoreProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);