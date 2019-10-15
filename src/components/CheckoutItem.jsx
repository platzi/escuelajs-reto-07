import React from 'react';
import { connect } from 'react-redux';
import { deleteToCart } from '../actions';

const CheckoutItem = (props) => {
  const { title, price, keyItem } = props;

  const handleDeleteToCart = () => {
    props.deleteToCart(keyItem);
  };

  return (
    <div className="Checkout-item">
      <div className="Checkout-element">
        <h4>{title}</h4>
        <span>
          $
          {price}
        </span>
      </div>
      <button className="fas fa-trash-alt" type="button" onClick={() => handleDeleteToCart()}> </button>
    </div>
  );
};

const mapDispatchToProps = {
  deleteToCart,
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
