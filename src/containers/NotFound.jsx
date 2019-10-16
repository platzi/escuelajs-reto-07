import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="Header">
    <Link to="/">
      <h1>Not Found</h1>
    </Link>
    <div className="Header-checkout">
      <Link to="/">
        Volver al inicio
      </Link>

    </div>
  </div>
);

export default NotFound;
