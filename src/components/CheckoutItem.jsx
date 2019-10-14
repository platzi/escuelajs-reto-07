import React from 'react';
import { connect } from 'react-redux';
import { deleteFromCart, removeFromTotalCost } from '../actions';
import '../styles/components/CheckoutItem.styl';

const CheckoutItem = (props) => {
  const { index, title, price } = props;

  const handleDeleteClick = () => {
    props.deleteFromCart(index);
    props.removeFromTotalCost(price);
  }

  return (
    <div className="Checkout-item">
      <div className="Checkout-element">
        <h4>{title}</h4>
        <span>
          $
          {price}
        </span>
      </div>
      <i className="fas fa-trash-alt" onClick={handleDeleteClick} />
    </div>
  );
};

const mapDispatchToProps = {
  deleteFromCart,
  removeFromTotalCost,
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
