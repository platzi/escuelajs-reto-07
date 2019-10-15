/* eslint-disable no-param-reassign */
import React from 'react';
import { connect } from 'react-redux';
import { addToCart, updateToCart } from '../actions';
import '../styles/components/Products.styl';

const Products = (props) => {
  const { products } = props;

  const handleAddToCart = (product) => {
    if (product.amount) {
      product.amount +=1
      props.updateToCart(product)
    } else {
      product.amount =1 
      props.addToCart(product);
    }
  }

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <div className="Products-item" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="Products-item-info">
              <h2>
                {product.title}
                <span>
                  $
                  {product.price}
                </span>
              </h2>
              <p>{product.description}</p>
            </div>
            <button type="button" onClick={() => handleAddToCart(product)}>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart,
  updateToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);