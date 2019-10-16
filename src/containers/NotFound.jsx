import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>Pagina no encontrada</h1>
      <Link to="/">Volver a Home</Link>
    </>
  )
}
export default NotFound;

