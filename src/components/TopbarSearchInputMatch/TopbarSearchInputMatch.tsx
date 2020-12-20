import React, { useContext, FunctionComponent } from 'react';
import { MatchLink, Text } from './TopbarSearchInputMatch.styles';
import CONSTANTS from './TopbarSearchInputMatch.constants';
import { ModalsDispatch } from '../../shared/context/ModalsContext';

const TopbarSearchInputMatch: FunctionComponent<any> = ({
  text
}): JSX.Element => {
  const dispatch = useContext(ModalsDispatch);

  const toggleTopbarSearch = (): void => {
    dispatch({ type: 'TOGGLE_TOPBAR_SEARCH' });
  };

  const firstMatch = CONSTANTS.SPECIFIC_TARGETS.find((target) => {
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
  const secondMatch = CONSTANTS.BROAD_TARGETS.find((target) => {
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

/* prototype for a simple search */
// const targets = [
//   'JavaScript - Loops',
//   'JavaScript - Promises',
//   'JavaScript - Async Await',
//   'React - Rendering',
//   'React - State Management',
//   'React - Side Effects',
//   'Full Stack - GraphQL/Relay',
//   'Full Stack - MongoDB',
//   'Full Stack - Authentication Management',
// ];

// const getMatch = (currentText) => targets.filter((target) => {
//   const lowerCaseTarget = target.toLowerCase();
//   const lowerCaseCurrentText = currentText.toLowerCase();
//   const [broadTarget, specificTarget] = lowerCaseTarget.split(' - ');
//   const found = broadTarget.includes(lowerCaseCurrentText);
//   return found || specificTarget.includes(lowerCaseCurrentText);
// });