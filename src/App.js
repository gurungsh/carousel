import React, { Component } from 'react';
import './App.css';

import image1 from './images/image1.jpeg';
import image2 from './images/image2.jpeg';
import image3 from './images/image3.jpeg';
import image4 from './images/image4.jpeg';
import image5 from './images/image5.jpeg';
import image6 from './images/image6.jpeg';
import image7 from './images/image7.jpeg';

import MyCarousel from './components/mycarousel';
import BootstarpCarousel from './components/bootstrapCarousel';


class App extends Component {
  render() {
    const images = [
      image1, image2, image3, image4, image5, image6, image7,
    ];
    return (
      <div className="App">
        <div className="carousel-custom-container">
          <h1>REACT CAROUSEL</h1>
          <MyCarousel images={images}></MyCarousel>
        </div>
        <div className="carousel-bootstrap-container">
          <h1>BOOTSTRAP CAROUSEL</h1>
          <BootstarpCarousel images={images}></BootstarpCarousel>
        </div>
      </div>
    );
  }
}

export default App;
