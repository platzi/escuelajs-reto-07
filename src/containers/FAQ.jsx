import React from 'react';
import '../styles/components/FAQ.styl';

const FAQ = () => {
return(
 <>
    <div className='FAQ-container'>
        <div className='FAQ-container-title'>
            <h2>
                Preguntas frecuentes
            </h2>
        </div>
        <div className='FAQ-container-text'>
            <h3 className='FAQ-question'>
            ¿Cómo funciona la mistery box?
            </h3>
            <p className='FAQ-answer'>
            Es un servicio de suscripción mensual en el que recibirás productos seleccionados especificamente para ti.
           </p>
           <h3 className='FAQ-question'>
            ¿Qué pasa si no me quedan los productos?
            </h3>
            <p className='FAQ-answer'>
           No hay ningún problema, ponte en contacto con nosotros y te realizaremos el cambio en los productos que nos indiques sin costo extra. 
           </p>
        </div>
    </div>
   

 </>
);
        
}


export default FAQ;
 