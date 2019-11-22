import React from 'react';
import '../styles/components/Checkout.styl';
import { connect } from 'react-redux';
import { deleteItem } from '../actions/index';
import { Link } from 'react-router-dom';



const Checkout = (props) => {
    
 const { cart } = props;
 const handleItemFromCart = (items) => {
    props.deleteItem(items);   
  }


  const totalSumCart = (elements) => {
  return elements.reduce((accum, current) => accum + current)
  };
  let productsPrice = [];
    const cardDrop = () => {
        let activeDropdown;
        let node;
  for (var i = 0; i < this.childNodes.length-1; i++)
    node = this.childNodes[i];
    if (node.className === 'dropdown-select') {
      node.classList.add('visible');
       activeDropdown = node; 
    };
    };

    const cardSelect = (e) => {
  if (e.target.tagName === 'LI' && activeDropdown){
    if (e.target.innerHTML === 'Master Card') {
      document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Master Card';
    }
    else if (e.target.innerHTML === 'American Express') {
         document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/f5hyn6u05ktql8d/amex-icon-6902.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'American Express';      
    }
    else if (e.target.innerHTML === 'Visa') {
         document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Visa';
    }
  }
  else if (e.target.className !== 'dropdown-btn' && activeDropdown) {
    activeDropdown.classList.remove('visible');
    activeDropdown = null;
  }


    };
    return(
      <>
        <div className='container'>
          <div className='window'>
            <div className='credit-info'>
              <div className='credit-info-content'>
                <table className='half-input-table'>
                  <tr>
                    <td>Please select your card: </td>
                    <td>
                      <div className='dropdown' id='card-dropdown'>
                        <div className='dropdown-btn' id='current-card' onClick={cardDrop}>
                      Visa
                        </div>
                        <div className='dropdown-select' onClick={cardSelect}>
                          <ul>
                            <li>Master Card</li>
                            <li>American Express</li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
                <img src='https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png' height='80' className='credit-card-image' id='credit-card-image' />
            Card Number
                <input className='input-field' />
            Card Holder
                <input className='input-field' />
                <table className='half-input-table'>
                  <tr>
                    <td>
                      {' '}
            Expires
                      <input className='input-field' />
                    </td>
                    <td>
            CVC
                      <input className='input-field' />
                    </td>
                  </tr>
                </table>
                <button className='pay-btn' >
                   <Link to='/thanks' className='button--link__pay'>Comprar </Link> 
                </button>

              </div>

            </div>
          </div>
        </div>
      </>
    );
};

const mapStateToProps = state => {
    return {
      cart: state.cart,
    };
  };
  
  const mapDispatchToProps = {
    deleteItem,
  };


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
