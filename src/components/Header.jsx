import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.styl';
import cartIcon from '../assets/static/cartIcon.png';
import userIcon from '../assets/static/userIcon.png';
import logo from '../assets/static/logo_white_background.jpg';
import { connect } from 'react-redux';

const Header = (props) => (
  <>
    <div className='Header__container'>
      <div className='Header__superior--container'>
        <div className='empty-element'></div>
        <div className='site--logo'>
          <h1><Link to='/'><img className='logo' src={logo} alt="VENTU" /></Link></h1>
        </div>
        <div className='cart__container'>
          <div className='user--Icon'>
            <Link to='/login'><img className='icon' src={userIcon} alt="user icon" /></Link>
          </div>
          <div className='cart--Icon'>
          
            <Link to='/cart'><img className='icon' src={cartIcon} alt="cart icon" /></Link>
            
          </div>
          {props.cart.length > 0 &&
            <div className="Header-alert">{props.cart.length}</div>
            }     
        </div>
      </div>

      <div className='Header__inferior--container'>
       <div className='Inferior-menu-cont'>
       <div className='Header__menu'>
          <li><Link to='/' className='Link-header'>Home</Link></li>
          <li><Link to='/aboutus' className='Link-header'>Sobre nosotros</Link></li>
          <li><Link to='/Store' className='Link-header'>Tienda</Link></li>
          <li><Link to='/faq' className='Link-header'>FAQ</Link></li>
          <li><Link to='/contact' className='Link-header'>Contacto</Link></li>
        </div>
      </div>

       </div>
    </div>
  </>
);

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Header);
