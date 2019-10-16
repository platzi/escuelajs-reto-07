import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <>
     <h1>No encontrado</h1>
     <Link to="/">
       <h2>Regresa al home</h2>
    </Link>

    </>
);

export default NotFound;