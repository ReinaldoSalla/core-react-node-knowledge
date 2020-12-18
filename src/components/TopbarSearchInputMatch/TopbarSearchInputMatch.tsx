import React from 'react';
import { Text, MatchLink } from './TopbarSearchInputMatch.styles';
import CONSTANTS from './TopbarSearchInputMatch.constants';

const TopbarSearchInputMatch = ({ text, toggleTopbarSearch }) => {
  const firstMatch = CONSTANTS.SPECIFIC_TARGETS.find((target) => {
    const isolatedTarget = target.split(' - ')[0];
    return isolatedTarget.slice(0, text.length).toLowerCase() === text.toLowerCase();
  });
  if (firstMatch) {
    return <MatchLink onClick={toggleTopbarSearch} to='/rendering'>{firstMatch}</MatchLink>;
  }
  const secondMatch = CONSTANTS.BROAD_TARGETS.find((target) => {
    const isolatedTarget = target.split('-')[0];
    return isolatedTarget.slice(0, text.length).toLowerCase() === text.toLowerCase();
  });
  if (secondMatch) {
    return <MatchLink onClick={toggleTopbarSearch} to='/'>{secondMatch}</MatchLink>;
  }
  return (
    <div style={{
      height: '1000px',
      border: '1px solid yellow',
    }}
    />
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