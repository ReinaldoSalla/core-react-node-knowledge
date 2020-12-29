import React, { useEffect, useContext, FunctionComponent } from 'react';
import Video from './Background.styles';
import { BackgroundProps } from './Background.types';
import { ModalsState } from '../../shared/context/ModalsContext';
import webm from '../../assets/videos/tech.1920x1080px.1000kbps.webm';
import mp4 from '../../assets/videos/tech.1920x1080px.1000kbps.mp4';
import img from '../../assets/videos/loading.png';

const Background: FunctionComponent<BackgroundProps> = ({
  videoDomNode
}): JSX.Element => {
  const {
    isTopbarSidebarVisible,
    isScrollbarVisible
  } = useContext(ModalsState);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion)').matches) {
      videoDomNode.current.pause();
    }
  }, [videoDomNode]);

  return (
    <Video
      autoPlay
      muted
      loop
      poster={img}
      ref={videoDomNode}
      isTopbarSidebarVisible={isTopbarSidebarVisible}
      isScrollbarVisible={isScrollbarVisible}
    >
      <source src={webm} type='video/webm' />
      <source src={mp4} type='video/mp4' />
    </Video>
  );
};

export default Background;