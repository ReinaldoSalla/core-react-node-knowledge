import React, { FunctionComponent } from 'react';
import { useSpring } from 'react-spring';
import { TopbarProps } from './Topbar.types';
import { getTopbarAnimation } from './Topbar.animations';
import TopbarSidebar from '../TopbarSidebar';
import TopbarHome from '../TopbarHome';
import useIsInTop from '../../hooks/useIsInTop';
import {
  TopbarHeader,
  TopbarNav,
  TopbarFiller
} from './Topbar.styles';

const Topbar: FunctionComponent<TopbarProps> = ({
  isSidebarActive,
  toggleSidebar
}): JSX.Element => {
  const isInTop = useIsInTop(50);

  const topbarFillerAnimation = useSpring(getTopbarAnimation(isInTop));

  return (
    <TopbarHeader>
      <TopbarNav>
        <TopbarSidebar 
          isSidebarActive={isSidebarActive}
          toggleSidebar={toggleSidebar}
        />
        <TopbarHome />
        <TopbarHome />
        <TopbarHome />
        <TopbarFiller style={topbarFillerAnimation}/>
      </TopbarNav>
    </TopbarHeader>
  );
};

export default Topbar;