/* eslint-disable */

import styled from 'styled-components/macro';
import { animated } from 'react-spring';
import { Link } from 'react-router-dom';
import { HoverProps } from './CarouselItem.types';

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

const CarouselItemTitle = styled(Link)<HoverProps>`
  font-size: 46px;
  font-weight: 600;
  margin: 0 16px;
  color: white;
  text-align: center;
  text-shadow: ${(props) => props.$isHovering ? '1px 1px 2px white, 0 0 1em white, 0 0 1px white' : '0px 0px 0px white, 0 0 0em white, 0 0 0px white'};
  transition: text-shadow 500ms;

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

const CarouselItemDescription = styled(Link)<HoverProps>`
  font-size: 32px;
  font-weight: 600;
  margin: 0 16px;
  color: white;
  text-align: center;
  text-shadow: ${(props) => props.$isHovering ? '1px 1px 2px white, 0 0 1em white, 0 0 1px white' : '0px 0px 0px white, 0 0 0em white, 0 0 0px white'};
  transition: text-shadow 500ms;

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

const CarouselItemCheckWrapper = styled(CarouselItemharedWrapper)<HoverProps>`
  justify-content: center;
  width: 150px;
  height: 130px;
  border: 1px solid white;
  border-radius: 20px;
  box-shadow: ${(props) => props.$isHovering ? '0 0 3px 3px white' : 'none'};
  transition: box-shadow 500ms;

  ${(props): string => props.theme.breakpoints.small} {
    width: 130px;
    height: 110px;
  }

  @media only screen and (max-height: 280px) {
    display: none;
  }
`;

const CarouselItemCheck = styled(Link)<HoverProps>`
  padding-bottom: 4px;
  font-size: 28px;
  font-weight: 600;
  margin: 0 16px;
  color: white;
  text-align: center;
  text-shadow: ${(props) => props.$isHovering ? '1px 1px 2px white, 0 0 1em white, 0 0 1px white' : '0px 0px 0px white, 0 0 0em white, 0 0 0px white'};
  transition: text-shadow 500ms;

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