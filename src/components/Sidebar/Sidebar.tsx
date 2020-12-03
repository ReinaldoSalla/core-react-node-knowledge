import React, { useRef } from 'react';
import { useSpring, useTransition, useChain } from 'react-spring';
import SidebarWrapper from './Sidebar.styles';
import { getSpring, getTransitions } from './Sidebar.animations';
import SidebarTopic from '../SidebarTopic';
import SidebarExit from '../SidebarExit';
import contents from '../../constants/contents';

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

const Sidebar = ({
  isSidebarVisible,
  toggleSidebar
}) => {
  const springRef: any = useRef();
  const transitionsRef: any = useRef();

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

  const onBlur = () => {
    console.log('Sidebar onBlur');
  };

  const onFocus = () => {
    console.log('Sidebar onFocus');
  };

  return (
    <SidebarWrapper style={spring} onBlur={onBlur} onFocus={onFocus}>
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