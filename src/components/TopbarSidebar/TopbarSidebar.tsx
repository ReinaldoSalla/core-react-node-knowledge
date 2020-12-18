import React, {
  useContext,
  useEffect,
  useRef,
  FunctionComponent,
} from 'react';
import { useSpring, useTransition, useChain } from 'react-spring';
import TopbarSidebarWrapper from './TopbarSidebar.styles';
import { getSpring, getTransitions } from './TopbarSidebar.animations';
import TopbarSidebarTopics from '../TopbarSidebarTopics';
import TopbarSidebarExit from '../TopbarSidebarExit';
import contents from '../../constants/contents';
import {
  ModalsState,
  ModalsDispatch,
} from '../../shared/context/ModalsContext';

const partialComponents = contents.map(({ title, subcontents }) => (
  ({ style }: any): any => (
    <TopbarSidebarTopics
      style={style}
      title={title}
      subcontents={subcontents}
    />
  )
));

const components = [...partialComponents, TopbarSidebarExit];

const indexedComponents: any = components.map((component, key) => ({
  component,
  key,
}));

const TopbarSidebar: FunctionComponent<any> = ({
  navDomNode,
}): any => {
  const springRef: any = useRef();
  const transitionsRef: any = useRef();
  const timeoutId = useRef<any>(null);
  const topbarSidebarDomNode = useRef<any>(null);

  const { isTopbarSidebarVisible } = useContext(ModalsState);

  const dispatch = useContext(ModalsDispatch);

  const toggleTopbarSidebar = () => {
    dispatch({ type: 'TOGGLE_TOPBAR_SIDEBAR' });
  };

  const spring = useSpring(getSpring(isTopbarSidebarVisible, springRef));

  const transitions = useTransition(
    isTopbarSidebarVisible ? indexedComponents : [],
    (item) => item.key,
    getTransitions(isTopbarSidebarVisible, transitionsRef),
  );

  useChain(
    isTopbarSidebarVisible
      ? [springRef, transitionsRef]
      : [transitionsRef, springRef],
    [0, isTopbarSidebarVisible ? 0.4 : 0.6],
  );

  const onClickOutside = (event): void => {
    if (
      isTopbarSidebarVisible
      && !topbarSidebarDomNode.current.contains(event.target)
      && !navDomNode.current.contains(event.target)
    ) {
      toggleTopbarSidebar();
    }
  };

  useEffect(() => {
    window.addEventListener('click', onClickOutside);
    return (): void => {
      window.removeEventListener('click', onClickOutside);
    };
  });

  const onFocus = (): void => {
    clearTimeout(timeoutId.current);
  };

  const onBlur = (): void => {
    timeoutId.current = setTimeout(() => {
      toggleTopbarSidebar();
    });
  };

  return (
    <TopbarSidebarWrapper
      ref={topbarSidebarDomNode}
      style={spring}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      {transitions.map(({ item, key, props }) => (
        <item.component
          style={props}
          key={key}
          toggleTopbarSidebar={toggleTopbarSidebar}
        />
      ))}
    </TopbarSidebarWrapper>
  );
};

export default TopbarSidebar;