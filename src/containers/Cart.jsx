import React from 'react';
import { connect } from 'react-redux';
import '../styles/components/Cart.styl';
import { deleteItem } from '../actions/index';
import { Link } from 'react-router-dom';


const Cart = (props) => {
  const { cart } = props;

  const handleItemFromCart = (items) => {
    props.deleteItem(items);   
  }


  const totalSumCart = (elements) => {
  return elements.reduce((accum, current) => accum + current)
  };
  let productsPrice = [];


  return (
    <div className="Cart">
      <div className="Cart-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin objetos en el carrito</h2>}
        {cart.map((item, index) => (
          <div className="Cart-item" key={index}>
            <div className="Cart-element">
              <h4>{item.title}</h4>
              <h3>{item.description}</h3>
              <span>
                $
                {item.price}
              </span>
            </div>
            <i className="fas fa-trash-alt" onClick={() => handleItemFromCart(index)}/>
          </div>
        ))}
      </div> 
      {cart.length > 0 && (
        <div className="Cart-sidebar">
            <div className='Cart-sidebar_left'>
              <div className='Left-buttons'>
              <button className='Left-buttons-link1'>
            <Link to='/'className='button--link'>Descubre más</Link>
            </button>
            <button className='Left-buttons-link2'>
            <Link to='/store'className='button--link'>Continua comprando</Link>
            </button>

              </div>

            </div>

            <div className='Cart-sidebar-right'>
            <h3 className='total-cart'>Total carrito:</h3>
          {cart.map((item) => {
            productsPrice.push(item.price);
          })}
          <h4>
            $ 
            {totalSumCart(productsPrice)} 
          </h4>
          <div className='Cart---sidebar-button'>
            <button className='button-link-checkout'>
            <Link to='./checkout'className='button--link'>Hacer checkout</Link>
            </button>

          </div>


            </div>
          
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
  deleteItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);