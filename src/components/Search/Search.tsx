import React, { useRef, FunctionComponent } from 'react';
import { 
  useSpring, 
  useTransition, 
  useChain, 
  config, 
  animated
} from 'react-spring';
import { SearchProps } from './Search.types';
import { 
  SearchWrapper,
  SearchTitle,
  SearchInput,
  SearchInputContainer,
  SearchExit
} from './Search.styles';

let rawItems = [
  ({ style, toggleSearch }) => <SearchTitle style={style}>Searh anything</SearchTitle>,
  ({ style, toggleSearch }) => <SearchInputContainer> <SearchInput style={style} type='text' placeholder='e.g. GraphQL' /> </SearchInputContainer>,
  ({ style, toggleSearch }) => <SearchExit onClick={toggleSearch} style={style}>x</SearchExit>
];

const items = rawItems.map((item, index) => ({
  component: item,
  key: index
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
    isSearchVisible ? items : [], 
    item => item.key,
    {
      ref: transitionsRef,
      unique: true,
      trail: 500 / items.length,
      from: { opacity: 0, transform: 'scale(0.5)', },
      enter: { opacity: 1, transform: 'scale(1)', },
      leave: { opacity: 0, transform: 'scale(0.9)', },
    }
  );

  useChain(
    isSearchVisible ? [springRef, transitionsRef] : [transitionsRef, springRef],
    [0, isSearchVisible ? 0.3 : 0.5]
  );

  // const transitionsExit: any = useTransition(isSearchVisible, null, {
  //   config: config.slow,
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 }
  // });

  return (
    <SearchWrapper style={spring}>
      {/* <SearchContainer> */}
        {transitions.map(({ item, key, props }) => (
          <item.component style={props} key={key} toggleSearch={toggleSearch}/>
        ))}
        {/* {transitionsExit.map(({ item, key, props }) => (
          item && <SearchExit style={props} key={key}>X</SearchExit>
        ))} */}
      {/* </SearchContainer> */}
    </SearchWrapper>
  );
};

export default Search;