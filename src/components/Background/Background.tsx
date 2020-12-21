import React from 'react';
import Video from './Background.styles';
import video from '../../assets/videos/tech.1920x1080px.1000kbps.mp4';
import img from '../../assets/videos/loading.png';

const Background = (): JSX.Element => (
  <Video autoPlay muted loop poster={img}>
    <source src={video} type='video/mp4' />
  </Video>
);

export default Background;