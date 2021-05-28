import React, { useContext, FunctionComponent } from 'react';
import Exit from './TopbarSearchExit.styles';
import { ModalsDispatch } from '../../shared/context/ModalsContext';

const TopbarSearchExit: FunctionComponent<any> = ({
  style
}): JSX.Element => {
  const dispatch = useContext(ModalsDispatch);

  const toggleTopbarSearch = (): void => {
    dispatch({ type: 'TOGGLE_TOPBAR_SEARCH' });
  };

  const handleClick = (): void => {
    toggleTopbarSearch();
  };

  return (
    <Exit onClick={handleClick} style={style}>x</Exit>
  );
};

export default TopbarSearchExit;
