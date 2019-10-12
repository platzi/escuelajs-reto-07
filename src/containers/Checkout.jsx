import React from 'react';
import { connect } from 'react-redux';
import '../styles/components/Checkout.styl';
import { deleteItem } from '../actions/index';


const Checkout = (props) => {
  const { cart } = props;

  const handleItemFromCart = (items) => {
    props.deleteItem(items);   
  }


  const totalSumCart = (elements) => {
  return elements.reduce((accum, current) => accum + current)
  };
  let productsPrice = [];


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
            <i className="fas fa-trash-alt" onClick={() => handleItemFromCart(index)}/>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          {cart.map((item) => {
            productsPrice.push(item.price);
          })}
          <h4>
            $ 
            {totalSumCart(productsPrice)} 
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

const mapDispatchToProps = {
  deleteItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);