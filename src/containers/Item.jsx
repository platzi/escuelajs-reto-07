import React from 'react';
import { connect } from 'react-redux';
import { deleteProduct } from '../actions';

const Item = (props) => {
  const { cart, title, price } = props;

  const handleDeleteProduct = thisCart => {
    props.deleteProduct(thisCart);
  };

  return (
    <div className="Checkout-item">
      <div className="Checkout-element">
        <h4>{title}</h4>
        <span>
          $
          {' '}
          {price}
        </span>
      </div>
      <button type='button' onClick={() => handleDeleteProduct(cart)}>
        <i className="fas fa-trash-alt" />
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  deleteProduct,
};

export default connect(null, mapDispatchToProps)(Item);

