import React, { useState, useRef, useContext, FunctionComponent } from 'react';
import { 
  useSpring, 
  useTransition, 
  useChain
} from 'react-spring';
import { getSpring, getTransitions } from './Search.animations';
import SearchWrapper from './Search.styles';
import SearchTitle from '../SearchTitle';
import SearchInput from '../SearchInput';
import SearchExit from '../SearchExit';
import { ModalsState } from '../../shared/context';
import { ModalsDispatch } from '../../shared/context';

const components = [SearchTitle, SearchInput, SearchExit];

const indexedComponents = components.map((component, key) => ({
  component,
  key
}));

const Search: FunctionComponent = (): JSX.Element => {
  const [text, setText] = useState('');
  const springRef: any = useRef();
  const transitionsRef: any = useRef();
  const timeoutId = useRef<any>(null);

  const { isSearchVisible } = useContext(ModalsState);

  const dispatch = useContext(ModalsDispatch);

  const toggleSearch = () => {
    dispatch({ type: 'TOGGLE_SEARCH' });
  };

  const spring = useSpring(getSpring(isSearchVisible, springRef));

  const transitions = useTransition(
    isSearchVisible ? indexedComponents : [], 
    (item) => item.key,
    getTransitions(isSearchVisible, transitionsRef, indexedComponents.length)
  );

  useChain(
    isSearchVisible ? [springRef, transitionsRef] : [transitionsRef, springRef],
    [0, isSearchVisible ? 0.3 : 0.5]
  );

  const onFocus = () => {
    clearTimeout(timeoutId.current);
  };

  const onBlur = () => {
    timeoutId.current = setTimeout(() => {
      toggleSearch();
    });
  }; 

  return (
    <SearchWrapper 
      style={spring} 
      $scroll={text.length > 0}
      onFocus={onFocus}
      onBlur={onBlur}
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