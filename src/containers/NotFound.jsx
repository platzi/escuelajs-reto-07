import React from 'react'
import '../styles/components/NotFound.styl';

const NotFound = () => {
    return (
      <div className='container__not-found'>
        <img
          src="https://assets.gitlab-static.net/assets/illustrations/error-404-4ac0f2ed92ff27c0f80853181c4dceb1858dac25d9e744d6594f067d60a45b48.svg"
          alt="not-found"
        />
        <h1>
          No encontramos el producto que estás buscando
          <span
            role='img'
            aria-label='not-found'
          >
            🐀
          </span>
        </h1>
      </div>
    );
}

export default NotFound