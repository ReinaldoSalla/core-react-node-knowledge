import styled from 'styled-components';
import { VideoProps } from './CarouselBackground.types';

const Video = styled.video<VideoProps>`
  position: absolute;
  width: ${(props): string => (
    props.isTopbarSidebarVisible && props.isScrollbarVisible
      ? 'calc(100% - 17px)'
      : '100%'
  )};
  height: 100%;
  object-fit: fill;
  z-index: -1;
`;

export default Video;