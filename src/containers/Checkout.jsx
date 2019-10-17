import React from 'react';
import { connect } from 'react-redux';
import '../styles/components/Checkout.styl';
import { deleteProduct } from '../actions';

const Checkout = (props) => {
  const { cart, total } = props;

  const handleDeleteProduct = thisCart => {
    props.deleteProduct(thisCart);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="Checkout-item" key={index}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
            <button type='button' onClick={() => handleDeleteProduct({item, index})}>
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
            {' '}
            {total}
          </h4>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
    total: state.total,
  };
};

const mapDispatchToProps = {
  deleteProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
