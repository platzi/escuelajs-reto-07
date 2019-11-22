import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { loginRequest } from '../actions/index';
import '../styles/components/Login.styl';



const Login = (props) => {

  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  }
    return(
      <>
        <section className="login">
          <section className="login__container">
            <h2>Inicia sesión</h2>
            <form className="login__container--form" onSubmit={handleSubmit}>
              <input
                name="email"
                className="input"
                type="text"
                placeholder="Correo"
                onChange={handleInput}
              />
              <input
                name="password"
                className="input"
                type="password"
                placeholder="Contraseña"
                onChange={handleInput}
              />
              <button className="button">Iniciar sesión</button>
              <div className="login__container--remember-me">
                <label>
                <input type="checkbox" id="cbox1" value="first_checkbox" /> Recuérdame
              </label>
                <a href="/">Olvidé mi contraseña</a>
              </div>
            </form>
            <section className="login__container--social-media">
              <div><SocialIcon className='social-icon'network='pinterest'  bgColor='#fff' style={{ height: 25, width: 25 }} />Inicia sesión con Google</div>
              <div><SocialIcon className='social-icon'network='pinterest'  bgColor='#fff' style={{ height: 25, width: 25 }} /> Inicia sesión con Twitter</div>
            </section>
            <p className="login__container--register">
              No tienes ninguna cuenta {' '}
              <Link to="/register">
                Regístrate
              </Link>
            </p>
          </section>
        </section>
      </>
    );
};
const mapDispatchToProps = {
  loginRequest,
};
export default connect(null, mapDispatchToProps)(Login);