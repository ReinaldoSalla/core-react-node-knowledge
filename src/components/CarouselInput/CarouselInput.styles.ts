import styled, { keyframes, css } from 'styled-components';
import { animated } from 'react-spring';
import CONSTANTS from '../Carousel/Carousel.constants';

const CarouselInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  position: absolute;
  bottom: 10px;
  z-index: 0;
`;

const CarouselInputArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
`;

const CarouselInputButton = styled.button`
  display: flex;
  justify-content: center;
  position: relative;
  height: 30px;
  width: 100px;
  border: 1px solid white;
  border-radius: 5px;
  transition: transform 500ms;

  &:hover {
    cursor: pointer;
  }

  @media (prefers-reduced-motion: no-preference) {
    &:hover {
      transform: scale(1.2);
    }
  }

  ${(props): string => props.theme.breakpoints.small} {
    width: 80px;
    height: 24px;
  }

  @media only screen and (max-width: 300px) {
    width: 65px;
    height: 20px;
  }
`;

const CarouselInputText = styled(animated.span)` 
  font-size: 20px;
  text-align: center;
  z-index: 1;

  ${(props): string => props.theme.breakpoints.small} {
    font-size: 16px;
    width: 80px;
  }

  @media only screen and (max-width: 300px) {
    font-size: 14px;
  }
`;

const CarouselInputInner = styled(animated.div)`
  height: 100%;
  position: absolute;
  top: -1px;
  left: 0px;
  border: 1px solid transparent;
  border-radius: 5px; 
`;

const CarouselInputTimer = styled.div`
  position: relative;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20px;
`;

const timer = keyframes`
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
`;

const timerCSS = css`
  animation: ${timer} ${CONSTANTS.DURATION}ms infinite linear backwards;
`;

const CarouselInputRow = styled(animated.div)`
  position: relative;
  z-index: 10;
  height: 10px;
  border-top: 2px solid white;
  
  @media (prefers-reduced-motion: no-preference) {
    ${timerCSS}
  }
`;

export {
  CarouselInputWrapper,
  CarouselInputArea,
  CarouselInputButton,
  CarouselInputText,
  CarouselInputInner,
  CarouselInputTimer,
  CarouselInputRow
};
