import React, { FunctionComponent } from 'react';
import Title from './TopbarSearchTitle.styles';

const SearchTitle: FunctionComponent<any> = ({ style }): JSX.Element => (
  <Title htmlFor='TopbarSearch' style={style}>TopbarSearch anything</Title>
);

export default SearchTitle;