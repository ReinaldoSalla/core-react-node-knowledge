import styled from 'styled-components';
import { animated } from 'react-spring';
// import { AiOutlinePlayCircle } from 'react-icons/ai';
// import { FaBars } from 'react-icons/fa';

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
`;

const CarouselInputText = styled(animated.span)` 
  font-size: 20px;
  text-align: center;
  z-index: 1;

  ${(props): string => props.theme.breakpoints.small} {
    font-size: 16px;
    width: 80px;
  }
`;

const CarouselInputInner = styled(animated.div)`
  height: 100%;
  position: absolute;
  left: 0;

  ${(props): string => props.theme.breakpoints.small} {
    height: 24px;
  }
`;

const CarouselInputTimer = styled.div`
  position: relative;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20px;
  /* border: 1px solid red; */

  &:hover {
    /* cursor: pointer; */
  }
`;

// const PauseContainer = styled.button`
//   position: absolute;
//   z-index: 1;
//   border: 1px solid blue;
// `;

// const PauseSvg = styled(FaBars)`
//   width: 2rem;
//   width: 2rem;
//   color: white;
// `;

// const PlaySvg = styled(AiOutlinePlayCircle)`
//   width: 2rem;
//   height: 2rem;
//   color: white;
//   /* transform: translateY(-30%); */
// `;

const CarouselInputRow = styled(animated.div)`
  position: relative;
  z-index: 10;
  height: 10px;
  border-top: 2px solid white;
`;

export {
  CarouselInputWrapper,
  CarouselInputArea,
  CarouselInputButton,
  CarouselInputText,
  CarouselInputInner,
  CarouselInputTimer,
  // PauseContainer,
  // PauseSvg,
  // PlaySvg,
  CarouselInputRow
};