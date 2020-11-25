import React, { useState, useRef, FunctionComponent } from 'react';
import { 
  useSpring, 
  useTransition, 
  useChain
} from 'react-spring';
import { SearchProps } from './Search.types';
import { getSpring, getTransitions } from './Search.animations';
import SearchWrapper from './Search.styles';
import SearchTitle from '../SearchTitle';
import SearchInput from '../SearchInput';
import SearchExit from '../SearchExit';

const components = [SearchTitle, SearchInput, SearchExit];

const indexedComponents = components.map((component, key) => ({
  component,
  key
}));

const Search: FunctionComponent<SearchProps> = ({
  isSearchVisible,
  toggleSearch
}): JSX.Element => {
  const [text, setText] = useState('');
  const springRef: any = useRef();
  const transitionsRef: any = useRef();

  const spring = useSpring(getSpring(isSearchVisible, springRef));

  const transitions = useTransition(
    isSearchVisible ? indexedComponents : [], 
    item => item.key,
    getTransitions(isSearchVisible, transitionsRef, indexedComponents.length),
  );

  useChain(
    isSearchVisible ? [springRef, transitionsRef] : [transitionsRef, springRef],
    [0, isSearchVisible ? 0.3 : 0.5]
  );

  return (
    <SearchWrapper 
      style={spring} 
      $scroll={text.length > 0}
    >
      {transitions.map(({ item, key, props }) => (
        <item.component 
          style={props} 
          key={key} 
          toggleSearch={toggleSearch}
          text={text}
          setText={setText}
        />
      ))}
    </SearchWrapper>
  );
};

export default Search;