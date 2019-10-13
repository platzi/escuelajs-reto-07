import React from 'react'
import '../styles/components/NotFound.styl';

const NotFound = () => (
  <React.Fragment>
    <section className="notfound">
      <div className="notfound__container">
        <img
          className='notfound__container-img' 
          src="https://static.platzi.com/static/images/error/img404.a1003ad86732.png"
          alt='Página No Encontrada'
        />
      </div>
      <h2>Hmmm!</h2>
      <p>No encontramos lo que buscabas. </p>
    </section>
  </React.Fragment>
)

export default NotFound
