import React, { useState, FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import {
  CarouselItemWrapper,
  CarouselItemTitle,
  CarouselItemDescription,
  CarouselItemCheckWrapper,
  CarouselItemCheck
} from './CarouselItem.styles';
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

  const handleMouseEnter = (): void => {
    setIsHovering(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovering(false);
  };

  return (
    <CarouselItemWrapper style={style}>
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        to={`${pathname}#${name}`}
        $isHovering={isHovering}
      >
        {description}
      </CarouselItemDescription>
      <CarouselItemCheckWrapper $isHovering={isHovering}>
        <CarouselItemCheck
          onClick={scrolls[index]}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          to={`${pathname}#${name}`}
          $isHovering={isHovering}
        >
          {check}
        </CarouselItemCheck>
      </CarouselItemCheckWrapper>
    </CarouselItemWrapper>
  );
};

export default CarouselItem;
