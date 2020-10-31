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
  SearchContainer,
  SearchTitle,
  SearchInput 
} from './Search.styles';

const DummyComponent = () => <div>xxx</div>;

// let items = [
//   <SearchTitle>
//     Search anything
//   </SearchTitle>,
//   <SearchInput
//     type='text' 
//     placeholder='e.g. GraphQL'
//   />
// ];

let rawItems = [
  ({ style }) => <SearchTitle style={style}>Searh anything</SearchTitle>,
  ({ style }) => <SearchInput style={style} type='text' placeholder='e.g. GraphQL' />,
];

const items = rawItems.map((item, index) => ({
  component: item,
  key: index
}));

const Search: FunctionComponent<SearchProps> = ({
  isSearchActive,
  toggleSearch
}): JSX.Element => {
  const springRef: any = useRef();
  const transitionsRef: any = useRef();

  const spring = useSpring({
    ref: springRef,
    from: {
      height: isSearchActive ? '800px' : '0px'
    },
    to: async (next) => {
      await next({
        height: isSearchActive ? '800px' : '0px'
      });
    },
  });

  const transitions = useTransition(
    isSearchActive ? items : [], 
    item => item.key,
    {
      ref: transitionsRef,
      unique: true,
      trail: 500 / items.length,
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 }
    }
  );

  useChain(
    isSearchActive ? [springRef, transitionsRef] : [transitionsRef, springRef],
    [0, isSearchActive ? 0.5 : 0.4]
  );

  return (
    <SearchWrapper style={spring}>
      <SearchContainer>
        {transitions.map(({ item, key, props }) => {
          const Component: any = item.component;
          return <Component style={props} key={key} />
        })}
      </SearchContainer>
    </SearchWrapper>
  );
};

export default Search;