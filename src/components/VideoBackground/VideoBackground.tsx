import React from 'react';
import video from '../../assets/videos/tech.1920x1080px.1000kbps.mp4';
import img from '../../assets/videos/loading.png';
import './VideoBackground.css';

const VideoBackground = () => (
  <video className="videobackground" autoPlay muted loop poster={img}>
    <source src={video} type="video/mp4" />
  </video>
);

export default VideoBackground;