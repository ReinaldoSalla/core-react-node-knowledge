import styled from 'styled-components';
import { animated } from 'react-spring';
import { WrapperProps } from './Carousel.types';

const CarouselWrapper = styled(animated.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export {
  CarouselWrapper
};