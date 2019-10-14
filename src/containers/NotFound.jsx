import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/components/NotFound.styl';

const NotFound = () => (
    <div className="NotFound">
    <img className="NotFound__img" src="https://static.platzi.com/static/images/error/img404.a1003ad86732.png" alt="image 404"/>
    <h1>No encontramos lo que buscabas</h1>
    <Link className="NotFound__backToHome" to="/">
        Regresar al home
    </Link>
    </div>
);

export default NotFound;