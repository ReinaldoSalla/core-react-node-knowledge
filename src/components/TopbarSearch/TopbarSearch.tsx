import React, {
  useRef, useContext, FunctionComponent
} from 'react';
import {
  useSpring,
  useTransition,
  useChain
} from 'react-spring';
import { getSpring, getTransitions } from './TopbarSearch.animations';
import SearchWrapper from './TopbarSearch.styles';
import TopbarSearchTitle from '../TopbarSearchTitle';
import TopbarSearchInput from '../TopbarSearchInput';
import TopbarSearchExit from '../TopbarSearchExit';
import {
  ModalsState,
  ModalsDispatch
} from '../../shared/context/ModalsContext';

const components = [TopbarSearchTitle, TopbarSearchInput, TopbarSearchExit];

const indexedComponents = components.map((component, key) => ({
  component,
  key
}));

const TopbarSearch: FunctionComponent = (): JSX.Element => {
  const springRef: any = useRef();
  const transitionsRef: any = useRef();
  const timeoutId = useRef<any>(null);

  const { isTopbarSearchVisible } = useContext(ModalsState);

  const dispatch = useContext(ModalsDispatch);

  const toggleTopbarSearch = (): void => {
    dispatch({ type: 'TOGGLE_TOPBAR_SEARCH' });
  };

  const spring = useSpring(getSpring(isTopbarSearchVisible, springRef));

  const transitions = useTransition(
    isTopbarSearchVisible ? indexedComponents : [],
    (item) => item.key,
    getTransitions(transitionsRef, indexedComponents.length)
  );

  useChain(
    isTopbarSearchVisible
      ? [springRef, transitionsRef]
      : [transitionsRef, springRef],
    [0, isTopbarSearchVisible ? 0.3 : 0.5]
  );

  const onFocus = (): void => {
    clearTimeout(timeoutId.current);
  };

  const onBlur = (): void => {
    timeoutId.current = setTimeout(() => {
      toggleTopbarSearch();
    });
  };

  return (
    <SearchWrapper
      style={spring}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {transitions.map(({ item, key, props }) => (
        <item.component
          style={props}
          key={key}
        />
      ))}
    </SearchWrapper>
  );
};

export default TopbarSearch;