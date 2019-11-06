import React from 'react';
import { Link } from 'react-router-dom';
// import '../assets/styles/Header.scss';
import '../styles/components/Header.styl';
import cartIcon from '../assets/static/cartIcon.png';
import userIcon from '../assets/static/userIcon.png';
import logo from '../assets/static/logo_white_background.jpg';

/* import { connect } from 'react-redux';

const Header = (props) => (
  <div className="Header">
    <Link to="/">
      <h1>Platzi Store</h1>
    </Link>
    <div className="Header-checkout">
      <Link to="/checkout">
        <i className="fas fa-shopping-basket" />
      </Link>
      {props.cart.length > 0 &&
        <div className="Header-alert">{props.cart.length}</div>
      }
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
}; */

const Header = () => (
  <>
    <div className='Header__container'>
      <div className='Header__superior--container'>
        <div className='site--logo'>
          <h1><Link><img className='logo' src={logo} alt="VENTU" /></Link></h1>
        </div>
        <div className='cart__container'>
          <div className='user--Icon'>
            <Link><img className='icon' src={userIcon} alt="user icon" /></Link>
          </div>
          <div className='cart--Icon'>
            <Link><img className='icon' src={cartIcon} alt="cart icon" /></Link>
          </div>
        </div>
      </div>

      <div className='Header__inferior--container'>
        <div className='Header__menu'>
          <li><Link>Home</Link></li>
          <li><Link>Sobre nosotros</Link></li>
          <li><Link>Tienda</Link></li>
          <li><Link>FAQ</Link></li>
          <li><Link>Contacto</Link></li>
        </div>
      </div>
    </div>
  </>
);


export default Header;
// export default connect(mapStateToProps, null)(Header);

