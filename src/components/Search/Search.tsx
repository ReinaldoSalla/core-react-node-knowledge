import React, { useRef, FunctionComponent } from 'react';
import { 
  useSpring, 
  useTransition, 
  useChain
} from 'react-spring';
import { SearchProps } from './Search.types';
import { SearchWrapper } from './Search.styles';
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
  const springRef: any = useRef();
  const transitionsRef: any = useRef();

  const spring = useSpring({
    ref: springRef,
    from: {
      height: isSearchVisible ? '800px' : '0px'
    },
    to: async (next) => {
      await next({
        height: isSearchVisible ? '800px' : '0px',
      });
    },
  });

  const transitions = useTransition(
    isSearchVisible ? indexedComponents : [], 
    item => item.key,
    {
      ref: transitionsRef,
      unique: true,
      trail: 500 / indexedComponents.length,
      from: { opacity: 0, transform: 'scale(0.5)', },
      enter: { opacity: 1, transform: 'scale(1)', },
      leave: { opacity: 0, transform: 'scale(0.9)', },
    }
  );

  useChain(
    isSearchVisible ? [springRef, transitionsRef] : [transitionsRef, springRef],
    [0, isSearchVisible ? 0.3 : 0.5]
  );

  return (
    <SearchWrapper style={spring}>
      {transitions.map(({ item, key, props }) => (
        <item.component 
          style={props} 
          key={key} 
          toggleSearch={toggleSearch}
        />
      ))}
    </SearchWrapper>
  );
};

export default Search;