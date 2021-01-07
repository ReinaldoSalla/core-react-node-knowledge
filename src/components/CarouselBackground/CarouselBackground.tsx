import React, { useEffect, useContext, useRef } from 'react';
import Video from './CarouselBackground.styles';
import { ModalsState } from '../../shared/context/ModalsContext';
import fullhdWebm from '../../assets/videos/tech.1920x1080px.1000kbps.webm';
import hdWebm from '../../assets/videos/tech.1280x720px.500kpbs.webm';
import fullhdMp4 from '../../assets/videos/tech.1920x1080px.1000kpbs.mp4';
import hdMp4 from '../../assets/videos/tech.1280x720px.500kpbs.mp4';
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
      {window.innerWidth > 576 ? (
        <>
          <source src={fullhdWebm} type='video/webm' />
          <source src={fullhdMp4} type='video/mp4' />
        </>
      ) : (
        <>
          <source src={hdWebm} type='video/webm' />
          <source src={hdMp4} type='video/mp4' />
        </>
      )}
    </Video>
  );
};

export default CarouselBackground;