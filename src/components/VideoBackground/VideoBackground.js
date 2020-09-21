import React from 'react';
import video from '../../assets/videos/tech.1920x1080px.1000kbps.mp4';
import './VideoBackground.css';

const VideoBackground = () => (
  <video className='videobackground' autoPlay muted loop poster="../../assets/videos/loading.png">
    <source src={video} type='video/mp4' />
  </video>
);

export default VideoBackground;