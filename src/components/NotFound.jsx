import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/NotFound.styl';

const NotFound = ({location}) => {

    return(
      <div className="not-found">
        <h1>404</h1>
        <h2>Ups...</h2>
        <p>
            No se encontró <code>{location.pathname}</code>
        </p>
        <Link to="/">
            Regresar al Home
        </Link>
      </div>
    )
}

export default NotFound;