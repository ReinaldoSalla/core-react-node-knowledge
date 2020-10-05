import React from 'react';
import {
  CouroselItemWrapper,
  CouroselItemTitle,
  CouroselItemDescription,
  CouroselItemCheckWrapper,
  CouroselItemCheck
} from './CouroselItem.styles';

const CouroselItem = ({ style, name, title, description, check }) => {
  return (
    <CouroselItemWrapper style={style}>
      <CouroselItemTitle>
        {title}
      </CouroselItemTitle>
      <CouroselItemDescription>
        {description}
      </CouroselItemDescription>
      <CouroselItemCheckWrapper>
        <CouroselItemCheck>
          {check}
        </CouroselItemCheck>
      </CouroselItemCheckWrapper>
    </CouroselItemWrapper>

  );
};

export default CouroselItem;