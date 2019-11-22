import React from 'react';
//import { connect } from 'react-redux';
//import { addToCart } from '../actions';
import '../../styles/components/Carousel.styl';
import productImage from '../../assets/static/images/blog_1.jpg';


const Carousel = () => {

return(
<div className='Carousel-section'>
    <div className='Carousel-container'>
        <div className='Carousel-container-title'>
            <h2 className='title-carousel'>Los mejores productos</h2>
        </div>
        <div className='Carousel-container-products'>
            <div className='products-carousel'>
                <div className='carousel-first-product'>
                    <div className='carousel-item'>
                        <div className='carousel-item-block'>
                            <div className='item-block-image'>
                                <img src={productImage} alt="foto1" className='item-image'/>
                            </div>
                            <div className='item-block-text'>
                                <h3>Marca 1</h3>
                                <p className='mb-0'>
                                    Finding the perfect t-shirt
                                </p>
                                <p className='text-primary'>
                                    $50
                                </p>
                            </div>

                        </div>

                    </div>
                    <div className='carousel-item'>
                        <div className='carousel-item-block'>
                            <div className='item-block-image'>
                                <img src={productImage} alt="foto1" className='item-image'/>
                            </div>
                            <div className='item-block-text'>
                                <h3>Marca 1</h3>
                                <p className='mb-0'>
                                    Finding the perfect t-shirt
                                </p>
                                <p className='text-primary'>
                                    $50
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
);
};

export default Carousel;