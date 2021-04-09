import React, { useState, FunctionComponent } from 'react';
import { useSpring } from 'react-spring';
import { useLocation } from 'react-router-dom';
import {
  CarouselItemWrapper,
  CarouselItemTitle,
  CarouselItemDescription,
  CarouselItemCheckWrapper,
  CarouselItemCheck
} from './CarouselItem.styles';
import getCarouselItemProps from './CarouselItem.animations';
import { CarouselItemProps } from './CarouselItem.types';

const CarouselItem: FunctionComponent<CarouselItemProps> = ({
  style,
  name,
  title,
  description,
  check,
  scrolls,
  index
}): JSX.Element => {
  const [isHovering, setIsHovering] = useState(false);

  const { pathname } = useLocation();

  const animationProps = useSpring(getCarouselItemProps(isHovering));

  const handleMouseEnter = (): void => {
    setIsHovering(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovering(false);
  };

  return (
    <CarouselItemWrapper style={style}>
      {/* <CarouselItemTitle
        onClick={scrolls[index]}
        style={animationProps}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        to={`${pathname}#${name}`}
      > */}
      <CarouselItemTitle
        onClick={scrolls[index]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        to={`${pathname}#${name}`}
        $isHovering={isHovering}
      >
        {title}
      </CarouselItemTitle>
      <CarouselItemDescription
        onClick={scrolls[index]}
        style={animationProps}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        to={`${pathname}#${name}`}
      >
        {description}
      </CarouselItemDescription>
      <CarouselItemCheckWrapper>
        <CarouselItemCheck
          onClick={scrolls[index]}
          style={animationProps}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          to={`${pathname}#${name}`}
        >
          {check}
        </CarouselItemCheck>
      </CarouselItemCheckWrapper>
    </CarouselItemWrapper>
  );
};

export default CarouselItem;