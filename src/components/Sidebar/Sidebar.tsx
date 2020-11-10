import React, { useRef } from 'react';
import { useSpring, useTransition, useChain, config } from 'react-spring';
import { SidebarWrapper } from './Sidebar.styles';
import SidebarTopic from '../SidebarTopic';
import SidebarExit from '../SidebarExit';
import data from '../../utils/categories-data-arr';

const partialComponents = data.map(({ title, contents }) => (
  ({ style }) => (
    <SidebarTopic 
      style={style}
      title={title}
      contents={contents}
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

  const spring = useSpring({
    config: config.slow,
    ref: springRef,
    from: {
      opacity: 0,
      transform: 'translate3d(-100%, 0, 0)'
    },
    to: async (next) => {
      await next({
        opacity: isSidebarVisible ? 1 : 0,
        transform: isSidebarVisible ? 'translate3d(0%, 0, 0)' : 'translate3d(-100%, 0, 0)'
      });
    }
  });

  const transitions = useTransition(
    isSidebarVisible ? indexedComponents : [],
    item => item.key,
    {
      ref: transitionsRef,
      unique: true,
      trail: isSidebarVisible ? 200 : 100,
      from: { opacity: 0, transform: 'scale(0.9)' },
      enter: { opacity: 1, transform: 'scale(1)' },
      leave: { opacity: 0, transform: 'scale(0.9)' }
    },
  );

  useChain(
    isSidebarVisible ? [springRef, transitionsRef] : [transitionsRef, springRef],
    [0, isSidebarVisible ? 0.4 : 0.6]
  );

  return (
    <SidebarWrapper style={spring}>
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