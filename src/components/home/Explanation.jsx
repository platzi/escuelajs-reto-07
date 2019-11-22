import React from 'react';
import '../../styles/components/Explanation.styl';
import shopIcon from '../../assets/static/shopIcon.png';
import deliverIcon from '../../assets/static/shipIcon.png';
import tryIcon from '../../assets/static/tryIcon.png';
import returnIcon from '../../assets/static/returnIcon.png';



const Explanation = () => {
 return (
   <>
       <div className='section-explanation'>
           <h2 className='Title-explanation'>¿Cómo funciona?</h2>
      <div className='container-explanation'>
          <div className='explanation-table'> 
              <div className='firstrow-first'>
                  <div className='explanation-icon'>
                      <img src={shopIcon} alt="Encuentra lo mejor" className='icon' />
                    </div>
                  <div className='explanation-text'>
                      <h2>EXCELENTES PRODUCTOS</h2>
                      <p>Explora variedad de marcas 100% mexicanas.</p>
                    </div>
                </div>
              <div className='firstrow-second'>
                  <div className='explanation-icon'>
                      <img src={deliverIcon} alt="Encuentra lo mejor" className='icon' />
                    </div>
                  <div className='explanation-text'>
                      <h2>RECIBE DONDE QUIERAS</h2>
                      <p>Recibe en la comodidad de tu casa u oficina s</p>
                    </div>
                </div>
              <div className='secondrow-first'>
                  <div className='explanation-icon'>
                      <img src={tryIcon} alt="Encuentra lo mejor" className='icon' />
                    </div>
                  <div className='explanation-text'>
                      <h2>PRUEBA LO MEJOR</h2>
                      <p>Un distribuidor VENTU te entregará tu orden.</p>
                    </div>
                </div>
              <div className='secondrow-second'>
                  <div className='explanation-icon'>
                      <img src={returnIcon} alt="Encuentra lo mejor" className='icon' />
                    </div>
                  <div className='explanation-text'>
                      <h2>LLEVA SOLO LO QUE TE GUSTA</h2>
                      <p>Si te agrada, paga y llévalo</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
     </>
    );
};

export default Explanation;