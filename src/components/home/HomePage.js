import React from 'react';

import Slider from './Slider';
import Adv from './Adv';
import Products from './Products';
const HomePage = () => {
  return (
    <div className="app">
      <Slider />
      <Adv />
      <Products />
    </div>
  );
};

export default HomePage;
