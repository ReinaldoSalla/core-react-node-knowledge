import React from 'react';
import Exit from './SearchExit.styles';

const SearchExit = ({ style, toggleSearch }) => (
  <Exit onClick={toggleSearch} style={style}>x</Exit>
);

export default SearchExit;