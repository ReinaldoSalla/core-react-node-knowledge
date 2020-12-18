import React, { useContext, useRef } from 'react';
import { useSpring } from 'react-spring';
import getTopbarAnimation from './Topbar.animations';
import TopbarContents from '../TopbarContents';
import TopbarHome from '../TopbarHome';
import TopbarMagnifier from '../TopbarMagnifier';
import useIsInTop from '../../hooks/useIsInTop';
import {
  Header,
  Nav,
  Filler
} from './Topbar.styles';
import TopbarSidebar from '../TopbarSidebar';
import TopbarSearch from '../TopbarSearch';
import { ModalsState } from '../../shared/context/ModalsContext';

const Topbar = (): JSX.Element => {
  const isInTop = useIsInTop(50);
  const {
    isTopbarSidebarVisible,
    isTopbarSearchVisible,
    isScrollbarVisible
  } = useContext(ModalsState);
  const navDomNode = useRef<any>(null);

  const fillerSpring = useSpring(getTopbarAnimation(
    isInTop,
    isTopbarSidebarVisible,
    isTopbarSearchVisible
  ));

  return (
    <Header
      $isTopbarSidebarVisible={isTopbarSidebarVisible}
      $isTopbarSearchVisible={isTopbarSearchVisible}
      $isScrollbarVisible={isScrollbarVisible}
    >
      <Nav ref={navDomNode}>
        <TopbarHome />
        <TopbarContents />
        <TopbarSidebar navDomNode={navDomNode} />
        <TopbarMagnifier />
        <TopbarSearch />
        <Filler style={fillerSpring} />
      </Nav>
    </Header>
  );
};

export default Topbar;