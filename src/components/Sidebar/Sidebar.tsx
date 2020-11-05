import React, { useState, useEffect, useRef } from 'react';
import { useSpring, useTransition, useChain, config } from 'react-spring';
import { 
  SidebarWrapper,
  SidebarContainer,
  SidebarTitle,
  SidebarContent,
  SidebarExit
} from './Sidebar.styles';

const data = [
  {
    title: 'React',
    contents: [
      'Rendering (JSX)',
      'State management',
      'Side Effects',
      'Memoization',
      'Suspense',
      'Intersecion Observer'
    ],
  },
  {
    title: 'React Libraries',
    contents: [
      'react-router',
      'styled-components',
      'react-spring'
    ],
  },
  {
    title: 'Node',
    contents: [
      'GraphQL',
      'MongoDB',
      'Passport.js'
    ],
  },
  {
    title: '1',
    contents: [
      'Rendering (JSX)',
      'State management',
      'Side Effects',
      'Memoization',
      'Suspense',
      'Intersecion Observer'
    ],
  },
  {
    title: 'b',
    contents: [
      'react-router',
      'styled-components',
      'react-spring'
    ],
  },
  {
    title: 'c',
    contents: [
      'GraphQL',
      'MongoDB',
      'Passport.js'
    ],
  },
];

let nCalls = 0;

const Sidebar = ({
  isSidebarActive,
  toggleSidebar
}) => {
  const springRef: any = useRef();
  const transitionsRef: any = useRef();
  const topRef: any = useRef();

  const spring = useSpring({
    config: config.slow,
    ref: springRef,
    from: {
      opacity: 0,
      transform: 'translate3d(-100%, 0, 0)'
    },
    to: async (next) => {
      await next({
        opacity: isSidebarActive ? 1 : 0,
        transform: isSidebarActive ? 'translate3d(0%, 0, 0)' : 'translate3d(-100%, 0, 0)'
      });
    }
  });

  const transitions = useTransition(
    isSidebarActive ? data : [],
    item => item.title,
    {
      ref: transitionsRef,
      unique: true,
      trail: 200,
      from: { opacity: 0, transform: 'scale(0.9)' },
      enter: { opacity: 1, transform: 'scale(1)' },
      leave: { opacity: 0, transform: 'scale(0.9)' }
    },
  );

  useChain(
    isSidebarActive ? [springRef, transitionsRef] : [transitionsRef, springRef],
    [0, isSidebarActive ? 0.4 : 0.5]
  );

  if (isSidebarActive) {
    if (document.documentElement.scrollTop !== 0) {
      topRef.current = document.documentElement.scrollTop;
    } else {
      topRef.current = topRef.current;
    }
  }

  // document.body.style.overflowY = isSidebarActive ? 'scroll' : 'auto';
  // document.body.style.position = isSidebarActive ? 'fixed' : 'static';
  // document.body.style.top = isSidebarActive ? `-${topRef.current}px` : '';

  return (
    <SidebarWrapper style={spring}>
      {transitions.map(({ item, key, props }) => (
        <SidebarContainer style={props} key={key}>
          <SidebarTitle>{item.title}</SidebarTitle>
          {item.contents.map((content, index) => (
            <ul key={index}>
              <SidebarContent>{content}</SidebarContent>
            </ul>
          ))}
        </SidebarContainer>
      ))}
      {/* <SidebarExit onClick={toggleSidebar}>X</SidebarExit> */}
    </SidebarWrapper>
  );
};

export default Sidebar;