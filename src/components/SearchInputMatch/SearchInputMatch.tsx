import React from 'react';
import { Text, MatchLink } from './SearchInputMatch.styles';
import CONSTANTS from './SearchInputMatch.constants';

const SearchInputMatch = ({ text, toggleSearch }) => {
  const firstMatch = CONSTANTS.SPECIFIC_TARGETS.find((target) => {
    const isolatedTarget = target.split(' - ')[0];
    return isolatedTarget.slice(0, text.length).toLowerCase() === text.toLowerCase();
  });
  if (firstMatch) {
    return <MatchLink onClick={toggleSearch} to='/rendering'>{firstMatch}</MatchLink>;
  }
  const secondMatch = CONSTANTS.BROAD_TARGETS.find((target) => {
    const isolatedTarget = target.split('-')[0];
    return isolatedTarget.slice(0, text.length).toLowerCase() === text.toLowerCase();
  });
  if (secondMatch) {
    return <MatchLink onClick={toggleSearch} to='/'>{secondMatch}</MatchLink>;
  }
  // return <Text>"{text}" not found</Text>
  return (
    <div style={{
      height: '1000px',
      border: '1px solid yellow'
    }}
    >

    </div>
  );
};

export default SearchInputMatch;


const targets = [
  'JavaScript - Loops',
  'JavaScript - Promises',
  'JavaScript - Async Await',
  'React - Rendering',
  'React - State Management',
  'React - Side Effects',
  'Full Stack - GraphQL/Relay',
  'Full Stack - MongoDB',
  'Full Stack - Authentication Management'
];

const getMatch = (currentText) => {  
  return targets.filter(target => {
    const lowerCaseTarget = target.toLowerCase();
    const lowerCaseCurrentText = currentText.toLowerCase();
    const [broadTarget, specificTarget] = lowerCaseTarget.split(' - ');
    const found = broadTarget.includes(lowerCaseCurrentText);
    return found ? found : specificTarget.includes(lowerCaseCurrentText);
  });
};

// const result = getMatch('manag');
// console.log(result);