import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <h1>Lo sentimos, la página que buscas no existe.</h1>
    <Link to='/'>Regresa a la tienda.</Link>
  </>
);

export default NotFound;
