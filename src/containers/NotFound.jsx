import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <h1>Error 404 - Page Not Found</h1>
    <h2>
      <Link to="/">Volver al principio</Link>
    </h2>
  </>
);

export default NotFound;
