import React from 'react';
import '../styles/components/Footer.styl';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';


const Footer = () => (
  <div className='Footer-container'>
      <div className='footer--terms'>
        <p>Política de privacidad</p>
        <p>Términos y condiciones</p>
       </div>
      <div className='footer-social'>
        
        <div className='social-icons'>
        <p className='social-description'>Encuéntranos en:</p>
        <SocialIcon className='social-icon'url='https://www.facebook.com/VENTU-2286397871627301' bgColor='#8c92a0' style={{ height: 25, width: 25 }}/>
        <SocialIcon className='social-icon'url='https://www.instagram.com/ventuapp' bgColor='#8c92a0' style={{ height: 25, width: 25 }}/>
        <SocialIcon className='social-icon'network='pinterest'  bgColor='#8c92a0' style={{ height: 25, width: 25 }} />
        <SocialIcon className='social-icon'network='whatsapp'  bgColor='#8c92a0' style={{ height: 25, width: 25 }} />
        
        </div>
      
      </div>

  </div>
);

export default Footer;