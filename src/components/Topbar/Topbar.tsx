import React, { useContext, FunctionComponent } from 'react';
import { useSpring } from 'react-spring';
import { TopbarProps } from './Topbar.types';
import { getTopbarAnimation } from './Topbar.animations';
import TopbarSidebar from '../TopbarSidebar';
import TopbarHome from '../TopbarHome';
import TopbarSearch from '../TopbarSearch';
import useIsInTop from '../../hooks/useIsInTop';
import {
  TopbarHeader,
  TopbarNav,
  Filler
} from './Topbar.styles';
import Sidebar from '../Sidebar';
import Search from '../Search';
import { ModalsState } from '../../shared/context';
import { ModalsDispatch } from '../../shared/context';

const Topbar = ({ isDeviceMobileOrTablet }): JSX.Element => {
  const isInTop = useIsInTop(50);
  const { isSidebarVisible, isSearchVisible } = useContext(ModalsState); 
  const dispatch = useContext(ModalsDispatch);

  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' });
  };

  const toggleSearch = () => {
    dispatch({ type: 'TOGGLE_SEARCH' });
  };

  const FillerAnimation = useSpring(getTopbarAnimation(
    isInTop,
    isSidebarVisible,
    isSearchVisible
  ));

  return (
    <TopbarHeader 
      $isSidebarVisible={isSidebarVisible}
      $isSearchVisible={isSearchVisible}
      $isDeviceMobileOrTablet={isDeviceMobileOrTablet} 
    >
      <TopbarNav>
        <TopbarHome />
        <TopbarSidebar 
          isSidebarVisible={isSidebarVisible}
          toggleSidebar={toggleSidebar}
        />
        <Sidebar 
          isSidebarVisible={isSidebarVisible}
          toggleSidebar={toggleSidebar}
        />
        <TopbarSearch 
          isSearchVisible={isSearchVisible}
          toggleSearch={toggleSearch}
        />
        <Search
          isSearchVisible={isSearchVisible}
          toggleSearch={toggleSearch}
        />
        <Filler style={FillerAnimation}/>
      </TopbarNav>
    </TopbarHeader>
  );
};

export default Topbar;