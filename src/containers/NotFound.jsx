import React from 'react';
import travolta from '../static/travolta.gif';
import '../styles/components/NotFound.styl';

const NotFound = () => (
  <section className="not-found">
    <img className="not-found__image" src={travolta} alt="Not found"/>
    <div className="not-found__text">
        <div className="not-found__404">
            404
        </div>
        <div className="not-found__title">
            NOT FOUND
        </div>
    </div>
  </section>
);

export default NotFound;