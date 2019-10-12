import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions'
import { getSumItemsOfCart } from '../utils'
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  const { cart, handleRemove, totalSum } = props;
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map(item => (
          <div key={item.randId} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
            <button type="button" onClick={() => handleRemove(item.randId)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>
            $
            {totalSum}
          </h4>
        </div>
      )}
    </div>
  )
};

const mapStateToProps = state => ({
  cart: state.cart,
  totalSum: getSumItemsOfCart(state.cart)
});

const mapDispatchToProps = dispatch => ({
  handleRemove: (randId) => dispatch(removeFromCart(randId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);