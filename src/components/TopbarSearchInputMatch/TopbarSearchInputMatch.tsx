import React, { useContext, FunctionComponent } from 'react';
import { MatchLink, Text } from './TopbarSearchInputMatch.styles';
import targets from './TopbarSearchInputMatch.utils';
import { ModalsDispatch } from '../../shared/context/ModalsContext';

const TopbarSearchInputMatch: FunctionComponent<any> = ({
  text
}): JSX.Element => {
  const dispatch = useContext(ModalsDispatch);

  const toggleTopbarSearch = (): void => {
    dispatch({ type: 'TOGGLE_TOPBAR_SEARCH' });
  };

  const firstMatch = targets.specificTargets.find((target) => {
    const isolatedTarget = target.split(' - ')[0];
    return isolatedTarget.slice(
      0,
      text.length
    ).toLowerCase() === text.toLowerCase();
  });
  if (firstMatch) {
    return (
      <MatchLink
        onClick={toggleTopbarSearch}
        to='/rendering'
      >
        {firstMatch}
      </MatchLink>
    );
  }
  const secondMatch = targets.broadTargets.find((target) => {
    const isolatedTarget = target.split('-')[0];
    return isolatedTarget.slice(
      0,
      text.length
    ).toLowerCase() === text.toLowerCase();
  });
  if (secondMatch) {
    return (
      <MatchLink
        onClick={toggleTopbarSearch}
        to='/'
      >
        {secondMatch}
      </MatchLink>
    );
  }
  return (
    <Text>
      &quot;
      {text}
      &quot; not found
    </Text>
  );
};

export default TopbarSearchInputMatch;