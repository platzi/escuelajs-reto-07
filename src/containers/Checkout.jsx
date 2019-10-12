import React from 'react';
import { connect } from 'react-redux';
import { removeProduct } from '../actions';
import '../styles/components/Checkout.styl';

const Checkout = ({ cart, removeProduct }) => {

  const handleRemove = (value) => {
    removeProduct(value);
  }

  const price = () => {
    let inc = 0;
    for(let i=0; i<cart.length; i++){
      inc += cart[i].price;
    }
    return inc;
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map(item => (
          <div key={item.id} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
            <i onClick={() => handleRemove(item.id)} className="fas fa-trash-alt" />
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>
            $
            {price()}
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
  removeProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);