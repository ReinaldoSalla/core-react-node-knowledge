import React from 'react';
import { Text, MatchLink } from './SearchInputMatch.styles';
import CONSTANTS from './SearchInputMatch.constants';

const SearchInputMatch = ({ text, toggleSearch }) => {
  const firstMatch = CONSTANTS.SPECIFIC_TARGETS.find((target) => {
    const isolatedTarget = target.split(' - ')[0];
    return isolatedTarget.slice(0, text.length).toLowerCase() === text.toLowerCase();
  });
  if (firstMatch) {
    return <MatchLink onClick={toggleSearch} to='/rendering'>{firstMatch}</MatchLink>
  }
  const secondMatch = CONSTANTS.BROAD_TARGETS.find((target) => {
    const isolatedTarget = target.split('-')[0];
    return isolatedTarget.slice(0, text.length).toLowerCase() === text.toLowerCase();
  })
  if (secondMatch) {
    return <MatchLink onClick={toggleSearch} to='/'>{secondMatch}</MatchLink>
  }
  return <Text>"{text}" not found</Text>
}

export default SearchInputMatch;