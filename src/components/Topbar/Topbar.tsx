import React, { useContext, FunctionComponent } from 'react';
import { useSpring } from 'react-spring';
import { getTopbarAnimation } from './Topbar.animations';
import TopbarSidebar from '../TopbarSidebar';
import TopbarHome from '../TopbarHome';
import TopbarSearch from '../TopbarSearch';
import useIsInTop from '../../hooks/useIsInTop';
import {
  Header,
  Nav,
  Filler
} from './Topbar.styles';
import Sidebar from '../Sidebar';
import Search from '../Search';
import { ModalsState } from '../../shared/context';

const Topbar = ({ isDeviceMobileOrTablet }): JSX.Element => {
  const isInTop = useIsInTop(50);
  const { isSidebarVisible, isSearchVisible } = useContext(ModalsState); 

  const fillerSpring = useSpring(getTopbarAnimation(
    isInTop,
    isSidebarVisible,
    isSearchVisible
  ));

  return (
    <Header 
      $isSidebarVisible={isSidebarVisible}
      $isSearchVisible={isSearchVisible}
      $isDeviceMobileOrTablet={isDeviceMobileOrTablet} 
    >
      <Nav>
        <TopbarHome />
        <TopbarSidebar/>
        <Sidebar/>
        <TopbarSearch/>
        <Search/>
        <Filler style={fillerSpring}/>
      </Nav>
    </Header>
  );
};

export default Topbar;