import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Products from '../components/Products';

const Store = () => {
    return(
        <>
        <div className='Store-title'>
            <h2>Tienda</h2>
        </div>
        <Products />
        </>
    );

};

export default Store;