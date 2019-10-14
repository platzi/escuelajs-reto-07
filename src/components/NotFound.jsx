import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404 error</h1>
      <p>La página que buscas no se encuentra disponible</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
};

export default NotFound;

