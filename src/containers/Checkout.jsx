/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import { updateToCart, deleteToCart } from '../actions'
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  const { cart  } = props;
  let totalPrince = 0
  const handleDeleteToCard = (itemId) => {
    props.deleteToCart(itemId);
  }

  const handleMostAmount = (item) => {
    item.amount +=1
    props.updateToCart(item)
  }

  const handleButAmount = (item) => {
    if (item.amount === 1) {
      props.deleteToCart(item.id)
    } else {
      item.amount -=1
      props.updateToCart(item)
    }
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        <div className="Checkout-content-items">
          <h4>Producto</h4>
          <h4>Cantidad</h4>
          <h4>Valor Unitario</h4>
          <h4>Valor Total</h4>
          <h4>Eliminar</h4>
        </div>
        {cart.map(item => { 
          totalPrince += (item.price * item.amount)
          return(
            <div className="Checkout-item" key={item.id}>
              <div className="Checkout-element">
                <h5>
                  {item.title}
                </h5>
                <span>
                  <i className="fas fa-angle-left" role="button" tabIndex={0} onClick={() => handleButAmount(item)} />
                  {item.amount}
                  <i className="fas fa-angle-right" role="button" tabIndex={0} onClick={() => handleMostAmount(item)} />
                </span>
                <span>
                  $
                  {item.price}
                </span>
                <span>
                  $
                  {item.price * item.amount}
                </span>
                <i className="fas fa-trash-alt" role="button" tabIndex={0} onClick={() => handleDeleteToCard(item.id)} />
              </div>
            </div>
        )})}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>
            $
            {totalPrince}
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

const mapDispatchToProps ={
  deleteToCart,
  updateToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
