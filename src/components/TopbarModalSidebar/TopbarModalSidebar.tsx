import React, { useContext, useEffect, useRef } from 'react';
import { useSpring, useTransition, useChain } from 'react-spring';
import TopbarModalSidebarWrapper from './TopbarModalSidebar.styles';
import { getSpring, getTransitions } from './TopbarModalSidebar.animations';
import TopbarModalSidebarTopic from '../TopbarModalSidebarTopic';
import TopbarModalSidebarExit from '../TopbarModalSidebarExit';
import contents from '../../constants/contents';
import { ModalsState } from '../../shared/context';
import { ModalsDispatch } from '../../shared/context';

const partialComponents = contents.map(({ title, subcontents }) => (
  ({ style }) => (
    <TopbarModalSidebarTopic 
      style={style}
      title={title}
      subcontents={subcontents}
    />
  )
));

const components = [...partialComponents, TopbarModalSidebarExit];

const indexedComponents = components.map((component, key) => ({
  component,
  key
}));


const TopbarModalSidebar = ({ navDomNode }) => {
  const springRef: any = useRef();
  const transitionsRef: any = useRef();
  const timeoutId = useRef<any>(null);
  const TopbarModalSidebarDomNode = useRef<any>(null);

  const { isTopbarModalSidebarVisible } = useContext(ModalsState);

  const dispatch = useContext(ModalsDispatch);

  const toggleTopbarModalSidebar = () => {
    dispatch({ type: 'TOGGLE_TopbarModalSidebar' });
  }

  const spring = useSpring(getSpring(isTopbarModalSidebarVisible, springRef));

  const transitions = useTransition(
    isTopbarModalSidebarVisible ? indexedComponents : [],
    (item) => item.key,
    getTransitions(isTopbarModalSidebarVisible, transitionsRef)
  );

  useChain(
    isTopbarModalSidebarVisible ? [springRef, transitionsRef] : [transitionsRef, springRef],
    [0, isTopbarModalSidebarVisible ? 0.4 : 0.6]
  );

  const onClickOutside = (event): void => {
    if (
      isTopbarModalSidebarVisible 
      && !TopbarModalSidebarDomNode.current.contains(event.target)
      && !navDomNode.current.contains(event.target)  
     ) {        
      toggleTopbarModalSidebar();
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
      toggleTopbarModalSidebar();
    });
  };

  return (
    <TopbarModalSidebarWrapper ref={TopbarModalSidebarDomNode} style={spring} onBlur={onBlur} onFocus={onFocus}>
      {transitions.map(({ item, key, props }) => (
        <item.component
          style={props}
          key={key}
          toggleTopbarModalSidebar={toggleTopbarModalSidebar}
        />
      ))}
    </TopbarModalSidebarWrapper>
  );
};

export default TopbarModalSidebar;