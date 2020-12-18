import React, { FunctionComponent } from 'react';
import Exit from './TopbarSearchExit.styles';

const TopbarSearchExit: FunctionComponent<any> = ({
  style,
  toggleTopbarSearch,
  setText
}): JSX.Element => {
  const handleClick = (): void => {
    toggleTopbarSearch();
    setText('');
  };

  return (
    <Exit onClick={handleClick} style={style}>x</Exit>
  );
};

export default TopbarSearchExit;