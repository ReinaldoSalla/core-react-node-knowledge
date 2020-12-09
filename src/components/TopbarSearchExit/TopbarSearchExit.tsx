import React from 'react';
import Exit from './TopbarSearchExit.styles';

const TopbarSearchExit = ({ style, toggleSearch, setText }) => {

  const handleClick = () => {
    toggleSearch();
    setText('');
  };

  return (
    <Exit onClick={handleClick} style={style}>x</Exit>
  );
};

export default TopbarSearchExit;