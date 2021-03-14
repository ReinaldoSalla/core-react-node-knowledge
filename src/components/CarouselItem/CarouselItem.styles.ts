import styled from 'styled-components/macro';
import { animated } from 'react-spring';
import { Link } from 'react-router-dom';

const CarouselItemharedWrapper = styled(animated.div)`
  display: flex;
  align-items: center;
`;

const CarouselItemWrapper = styled(CarouselItemharedWrapper)`
  flex-direction: column;
  justify-content: space-evenly;
  height: calc(100% - ${(props): string => props.theme.topbarHeight} - 20px);
  position: absolute;
  overflow: hidden;
  padding-bottom: 20px;
`;

const CarouselItemTitle = styled(animated(Link))`
  font-size: 46px;
  font-weight: 600;
  margin: 0 16px;
  color: white;
  text-align: center;

  ${(props): string => props.theme.breakpoints.small} {
    font-size: 38px;
  }

  @media only screen and (max-height: 500px) {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

const CarouselItemDescription = styled(animated(Link))`
  font-size: 32px;
  font-weight: 600;
  margin: 0 16px;
  color: white;
  text-align: center;

  ${(props): string => props.theme.breakpoints.small} {
    font-size: 28px;
  }

  @media only screen and (max-height: 425px) {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

const CarouselItemCheckWrapper = styled(CarouselItemharedWrapper)`
  justify-content: center;
  width: 150px;
  height: 130px;
  border: 1px solid white;
  border-radius: 20px;

  ${(props): string => props.theme.breakpoints.small} {
    width: 130px;
    height: 110px;
  }

  @media only screen and (max-height: 280px) {
    display: none;
  }
`;

const CarouselItemCheck = styled(animated(Link))`
  padding-bottom: 4px;
  font-size: 28px;
  font-weight: 600;
  margin: 0 16px;
  color: white;
  text-align: center;

  ${(props): string => props.theme.breakpoints.small} {
    font-size: 24px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export {
  CarouselItemWrapper,
  CarouselItemTitle,
  CarouselItemDescription,
  CarouselItemCheckWrapper,
  CarouselItemCheck
};