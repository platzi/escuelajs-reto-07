import React from 'react';
import '../styles/components/NotFound.styl';

const NotFound = () =>
{
    return(
      <div className="notFound__container">
            <h1 className="notFound">404!</h1>
            <img src="https://image.freepik.com/foto-gratis/rueda-carrito-compras-roto-laptop_43379-41.jpg" className="notFound__image" alt="img"/>
        </div>
    );
}

export default NotFound;