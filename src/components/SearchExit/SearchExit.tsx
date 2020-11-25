import React from 'react';
import Exit from './SearchExit.styles';

const SearchExit = ({ style, toggleSearch, setText }) => {

  const handleClick = () => {
    toggleSearch();
    setText('');
  };

  return (
    <Exit onClick={handleClick} style={style}>x</Exit>
  );
};

export default SearchExit;