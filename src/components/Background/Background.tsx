import React from 'react';
import Video from './Background.styles';
import webm from '../../assets/videos/tech.1920x1080px.1000kbps.webm';
import mp4 from '../../assets/videos/tech.1920x1080px.1000kbps.mp4';
import img from '../../assets/videos/loading.png';

const Background = (): JSX.Element => (
  <Video autoPlay muted loop poster={img}>
    <source src={webm} type='video/webm' />
    <source src={mp4} type='video/mp4' />
  </Video>
);

export default Background;

/*
const video = document.getElementById('background-video')

if (window.matchMedia('(prefers-reduced-motion)').matches) {
 video.removeAttribute('autoplay')
 video.pause()
}
*/