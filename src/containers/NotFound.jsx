import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/NotFound.styl';

const NotFound = () => (
  <>
    <h2>No encontramos la página que buscas :(</h2>
    <h4>
      Por favor vuelve al <Link to={'/'}>inicio</Link>
    </h4>
  </>
);

export default NotFound;
