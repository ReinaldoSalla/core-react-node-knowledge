import React, { useContext, useEffect, useRef } from 'react';
import { useSpring, useTransition, useChain } from 'react-spring';
import SidebarWrapper from './Sidebar.styles';
import { getSpring, getTransitions } from './Sidebar.animations';
import SidebarTopic from '../SidebarTopic';
import SidebarExit from '../SidebarExit';
import contents from '../../constants/contents';
import { ModalsState } from '../../shared/context';
import { ModalsDispatch } from '../../shared/context';

const partialComponents = contents.map(({ title, subcontents }) => (
  ({ style }) => (
    <SidebarTopic 
      style={style}
      title={title}
      subcontents={subcontents}
    />
  )
));

const components = [...partialComponents, SidebarExit];

const indexedComponents = components.map((component, key) => ({
  component,
  key
}));


const Sidebar = ({ navDomNode }) => {
  const springRef: any = useRef();
  const transitionsRef: any = useRef();
  const timeoutId = useRef<any>(null);
  const sidebarDomNode = useRef<any>(null);

  const { isSidebarVisible } = useContext(ModalsState);

  const dispatch = useContext(ModalsDispatch);

  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' });
  }

  const spring = useSpring(getSpring(isSidebarVisible, springRef));

  const transitions = useTransition(
    isSidebarVisible ? indexedComponents : [],
    (item) => item.key,
    getTransitions(isSidebarVisible, transitionsRef)
  );

  useChain(
    isSidebarVisible ? [springRef, transitionsRef] : [transitionsRef, springRef],
    [0, isSidebarVisible ? 0.4 : 0.6]
  );

  const onClickOutside = (event): void => {
    if (
      isSidebarVisible 
      && !sidebarDomNode.current.contains(event.target)
      && !navDomNode.current.contains(event.target)  
     ) {        
      toggleSidebar();
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
      toggleSidebar();
    });
  };

  return (
    <SidebarWrapper ref={sidebarDomNode} style={spring} onBlur={onBlur} onFocus={onFocus}>
      {transitions.map(({ item, key, props }) => (
        <item.component
          style={props}
          key={key}
          toggleSidebar={toggleSidebar}
        />
      ))}
    </SidebarWrapper>
  );
};

export default Sidebar;