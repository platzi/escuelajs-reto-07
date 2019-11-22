import React from 'react';
//import { connect } from 'react-redux';
//import { addToCart } from '../actions';
import '../../styles/components/Carousel.styl';
import productBox from '../../assets/static/images/intro.jpg';
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
                                <img src={productBox} alt="foto1" className='item-image'/>
                            </div>
                            <div className='item-block-text'>
                                <h3>Productos de temporada</h3>
                                <p className='mb-0'>
                                    Visita nuestra tienda 
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
                                <h3>Productos personalizados</h3>
                                <p className='mb-0'>
                                    Ropa solo para ti
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