import React from 'react';
import {
  CouroselItemWrapper,
  CouroselItemTitle,
  CouroselItemDescription,
  CouroselItemCheckWrapper,
  CouroselItemCheck
} from './CouroselItems.styles';

const CouroselItem = ({ style, name, title, description, check }) => {
  return (
    <CouroselItemWrapper style={style}>
      <CouroselItemTitle as='h1'>
        {title}
      </CouroselItemTitle>
      <CouroselItemDescription as='h2'>
        {description}
      </CouroselItemDescription>
      <CouroselItemCheckWrapper>
        <CouroselItemCheck as='span'>
          {check}
        </CouroselItemCheck>
      </CouroselItemCheckWrapper>
    </CouroselItemWrapper>
  );
};

export default CouroselItem;