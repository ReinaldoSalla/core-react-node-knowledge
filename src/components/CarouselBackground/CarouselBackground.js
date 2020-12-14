import React from 'react';
import video from '../../assets/videos/tech.1920x1080px.1000kbps.mp4';
import img from '../../assets/videos/loading.png';
import './CarouselBackground.css';

const CarouselBackground = () => (
  <video className='videobackground' autoPlay muted loop poster={img} alt='Blocks of code moving towards the screen'>
    <source src={video} type='video/mp4'  />
  </video>
  // <img src={img} className='videobackground' alt='123' />
);

export default CarouselBackground;