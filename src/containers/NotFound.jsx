import React from 'react';
import '../styles/components/Notfound.css';

const broken ="https://media.giphy.com/media/9J7tdYltWyXIY/giphy.gif";


const NotFound=()=> {
    return (
      <div className="page-container">
        <div className="bg" style={{ backgroundImage: `url(${  broken  })`}} />
        <h1 className="title">404</h1>
      </div>
    )
}
export default NotFound