import React from 'react';

import '../styles/components/Error.styl';
// import './styles/Errors.css';
import NotFoundImg from '../../assets/static/404.png';

const NotFound = () => (
  <div className="Error">
    <div align="center" className="Error-margin">
      <b className="Error-text">
        <span>Error: 404</span>
        <br />
        <span>Page Not Found</span>
      </b>
      <img src={NotFoundImg} alt="404 NotFound" className="Error-image" />
    </div>
  </div>
);

export default NotFound;
