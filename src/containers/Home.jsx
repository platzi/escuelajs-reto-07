import React from 'react';
import Intro from '../components/home/Intro';
import Explanation from '../components/home/Explanation';
import Carousel from '../components/home/Carousel';

const Home = () => {
    return(
      <>
        <Intro />
        <Explanation />
        <Carousel />
      </>
    );
}

export default Home;