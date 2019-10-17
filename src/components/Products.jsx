import React from 'react';
import { connect } from 'react-redux';
import { ADD_TO_CART } from '../actions';
import '../styles/components/Products.styl';

const Products = (props) => {
  const { products } = props;

  const handleAddToCart = (product) => {
    props.ADD_TO_CART(product);
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
  ADD_TO_CART,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);