import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/Intro.styl';
import introImg from '../../assets/static/images/intro.jpg'

const Intro = () => {
    return(
      <div className='site-blocks-cover'>
        <div className='container-intro'>
          <div className='container-intro-image'>
            <img src={introImg} alt="La mejor ropa" className='intro-image'  />
          </div>
          <div className='contaianer-intro-text'>
            <div className='col-md-5 text-center text-md-left pt-5 pt-md-0'>
              <h1 className='mb-2'>Una nueva forma de comprar </h1>
              <div className='intro-text '>
                <p className='mb-4'>Con VENTU encuentra tus productos favoritos de marcas mexicanas. Rápido y confiable.  </p>
                <button className='Button'>
                    <Link className='Button-link'>Tienda</Link>
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
         
        
    );
};

export default Intro;