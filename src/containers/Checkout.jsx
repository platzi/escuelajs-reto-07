import React from 'react';
import { connect } from 'react-redux';
import { deleteToCart } from '../actions';
import '../styles/components/Checkout.styl';



const Checkout = (props) => {

  const { cart } = props;

  const handleDelete = id => {
    props.deleteToCart(id);
  };
  const handlePriceTotal = () => {
    const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
    const sumaTotal = cart.reduce(reducer, 0);
    return sumaTotal;    
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map((item, index) => (

          <div className="Checkout-item">
            <div className="Checkout-element">
              <h3>{item.title}</h3>
              <span>${item.price}</span>
            </div>
            {/* <button type="button" onClick={() => handleDelete(index)}>
            <i className="fas fa-trash-alt"/>
            </button> */}
            <i 
              role="button"
              tabIndex={0}
              className="fas fa-trash-alt"
              onClick={() => handleDelete(index)}
              />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h1>$ {handlePriceTotal()}</h1>
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
};


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);