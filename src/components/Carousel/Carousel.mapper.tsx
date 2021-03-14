import React from 'react';
import markup from './Carousel.markup';
import CarouselItem from '../CarouselItem';
import { CarouselItemProps } from './Carousel.types';

const components = markup.map(({
  name, title, description, check
}) => (({ style, scrolls, index }: CarouselItemProps): JSX.Element => (
  <CarouselItem
    style={style}
    name={name}
    title={title}
    description={description}
    check={check}
    scrolls={scrolls}
    index={index}
  />
)));

export default components;