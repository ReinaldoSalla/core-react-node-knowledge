import React from 'react';
import Exit from './TopbarSearchExit.styles';

const TopbarSearchExit = ({ style, toggleTopbarSearch, setText }) => {
  const handleClick = (): void => {
    toggleTopbarSearch();
    setText('');
  };

  return (
    <Exit onClick={handleClick} style={style}>x</Exit>
  );
};

export default TopbarSearchExit;