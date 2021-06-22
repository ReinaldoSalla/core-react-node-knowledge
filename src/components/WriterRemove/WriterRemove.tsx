import React from 'react';
import Remove from './WriterRemove.styles';
import WriterRemoveProps from './WriterRemove.types';

function WriterRemove({ onClick }: WriterRemoveProps) {
  return (
    <Remove onClick={onClick}>X</Remove>
  );
}

export default WriterRemove;
