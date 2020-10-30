import React from 'react';
import { 
  SearchWrapper,
  SearchContainer,
  SearchTitle,
  SearchInput 
} from './Search.styles';

const Search = () => {
  return (
    <SearchWrapper>
      <SearchContainer>
        <SearchTitle>
          Search anything
        </SearchTitle>
        <SearchInput
          type='text' 
          placeholder='e.g. GraphQL'
        />
      </SearchContainer>
    </SearchWrapper>
  );
};

export default Search;