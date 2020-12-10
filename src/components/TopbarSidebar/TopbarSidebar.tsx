import React, { useContext, useEffect, useRef } from 'react';
import { useSpring, useTransition, useChain } from 'react-spring';
import TopbarSidebarWrapper from './TopbarSidebar.styles';
import { getSpring, getTransitions } from './TopbarSidebar.animations';
import TopbarSidebarTopics from '../TopbarSidebarTopics';
import TopbarSidebarExit from '../TopbarSidebarExit';
import contents from '../../constants/contents';
import { ModalsState } from '../../shared/context';
import { ModalsDispatch } from '../../shared/context';

const partialComponents = contents.map(({ title, subcontents }) => (
  ({ style }) => (
    <TopbarSidebarTopics 
      style={style}
      title={title}
      subcontents={subcontents}
    />
  )
));

const components = [...partialComponents, TopbarSidebarExit];

const indexedComponents = components.map((component, key) => ({
  component,
  key
}));

const TopbarSidebar = ({ navDomNode }) => {
  const springRef: any = useRef();
  const transitionsRef: any = useRef();
  const timeoutId = useRef<any>(null);
  const topbarSidebarDomNode = useRef<any>(null);

  const { isTopbarSidebarVisible } = useContext(ModalsState);

  const dispatch = useContext(ModalsDispatch);

  const toggleTopbarSidebar = () => {
    dispatch({ type: 'TOGGLE_TOPBAR_SIDEBAR' });
  }

  const spring = useSpring(getSpring(isTopbarSidebarVisible, springRef));

  const transitions = useTransition(
    isTopbarSidebarVisible ? indexedComponents : [],
    (item) => item.key,
    getTransitions(isTopbarSidebarVisible, transitionsRef)
  );

  useChain(
    isTopbarSidebarVisible ? [springRef, transitionsRef] : [transitionsRef, springRef],
    [0, isTopbarSidebarVisible ? 0.4 : 0.6]
  );

  const onClickOutside = (event): void => {
    if (
      isTopbarSidebarVisible 
      && !topbarSidebarDomNode.current.contains(event.target)
      && !navDomNode.current.contains(event.target)  
     ) {        
      toggleTopbarSidebar();
    }
  }

  useEffect(() => {
    window.addEventListener('click', onClickOutside);
    return () => window.removeEventListener('click', onClickOutside);
  });

  const onFocus = () => {
    clearTimeout(timeoutId.current);  
  };
  
  const onBlur = () => {
    timeoutId.current = setTimeout(() => {
      toggleTopbarSidebar();
    });
  };

  return (
    <TopbarSidebarWrapper ref={topbarSidebarDomNode} style={spring} onBlur={onBlur} onFocus={onFocus}>
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