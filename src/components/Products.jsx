import React from 'react';
import { connect } from 'react-redux';
import { addToCart, addMoreProduct } from '../actions';
import '../styles/components/Products.styl';

const Products = (props) => {
  const { products, cart } = props;

  const handleAddToCart = (product) => {
    const productIndex = cart.findIndex(item => product.id===item.id);
    if(productIndex>=0){
      props.addMoreProduct(product.id)
    }else{
      props.addToCart({...product, quantity:1});
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
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  addToCart,
  addMoreProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);