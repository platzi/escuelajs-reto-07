import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteItem, calcTotal } from '../actions';
import '../styles/components/Checkout.styl';

const Checkout = props => {
  const { cart } = props;
  const handleDeleteItem = itemID => {
    props.deleteItem(itemID);
  };
  // const [total, setTotal] = useState({
  //   total: 0,
  // });

  // setTotal({
  //   total: { cart.forEach(item => {
  //     item.precie
  //   })}
  // })

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map(item => (
          <div key={item.id} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <i
              onClick={() => handleDeleteItem(item.id)}
              className="fas fa-trash-alt"
            />
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
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = {
  deleteItem,
  calcTotal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
