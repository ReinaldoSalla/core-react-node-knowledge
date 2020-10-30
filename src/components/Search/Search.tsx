import React, { FunctionComponent} from 'react';
import { useTransition, config } from 'react-spring';
import { SearchProps } from './Search.types';
import { 
  SearchWrapper,
  SearchContainer,
  SearchTitle,
  SearchInput 
} from './Search.styles';

const Search: FunctionComponent<SearchProps> = ({
  isSearchActive,
  toggleSearch
}): JSX.Element => {
  const transitions = useTransition(isSearchActive, null, {
    from: { opacity: 0, height: '0px' },
    enter: { opacity: 1, height: '800px' },
    leave: { opacity: 0, height: '0px' },
  });
  return ( 
    <> 
      {transitions.map(({ item, key, props }) => (
        item && (
          <SearchWrapper style={props} key={key}>
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
        )
      ))}
    </>
  );
};

export default Search;