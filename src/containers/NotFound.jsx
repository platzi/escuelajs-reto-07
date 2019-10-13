import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <React.Fragment>
    <h1>Lo que buscas, no se encuentra aquí.</h1>
    <Link to="/">Regresa al Home</Link>
  </React.Fragment>
);

export default NotFound;
