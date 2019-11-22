import React from 'react';
import '../styles/components/Thanks.styl';
import { Link } from 'react-router-dom';


const Thanks = () => (
    <div className='Thanks--container'>
        <div className='Thaks--container--site'>
            <div className='container--site--title'>
                <h2>Gracias por tu compra</h2>
                    <p>Tu órden fue completada de forma exitosa</p>
            </div>
            <div className='container--site--button'>
                <button className='return--button' >
                   <Link to='/store' className='return--button--link'>Regresa a la tienda </Link> 
                </button>
            </div>
        </div>
    </div>
);

export default Thanks;