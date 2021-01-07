import React, { useEffect, useContext, useRef } from 'react';
import Video from './CarouselBackground.styles';
import { ModalsState } from '../../shared/context/ModalsContext';
import webm from '../../assets/videos/tech.1920x1080px.1000kbps.webm';
import mp4 from '../../assets/videos/tech.1920x1080px.1000kbps.mp4';
// import img from '../../assets/videos/loading.png';

const CarouselBackground = (): JSX.Element => {
  const {
    isTopbarSidebarVisible,
    isScrollbarVisible
  } = useContext(ModalsState);
  const videoDomNode = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (
      videoDomNode.current
      && window.matchMedia('(prefers-reduced-motion)').matches
    ) {
      videoDomNode.current.pause();
    }
  }, [videoDomNode]);

  return (
    <Video
      autoPlay
      muted
      loop
      // poster={img}
      ref={videoDomNode}
      isTopbarSidebarVisible={isTopbarSidebarVisible}
      isScrollbarVisible={isScrollbarVisible}
    >
      <source src={webm} type='video/webm' />
      <source src={mp4} type='video/mp4' />
    </Video>
  );
};

export default CarouselBackground;