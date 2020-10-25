import React, { FunctionComponent } from 'react';
import { useSpring } from 'react-spring';
import { TopbarProps } from './Topbar.types';
import { getTopbarAnimation } from './Topbar.animations';
import TopbarSidebar from '../TopbarSidebar';
import useIsInTop from '../../hooks/useIsInTop';
import {
  TopbarWrapper,
  TopbarFiller
} from './Topbar.styles';

const Topbar: FunctionComponent<TopbarProps> = ({
  isSidebarVisible,
  toggleSidebar
}): JSX.Element => {
  const isInTop = useIsInTop(50);

  const topbarFillerAnimation = useSpring(getTopbarAnimation(isInTop));

  return (
    <header>
      <TopbarWrapper>
        <TopbarSidebar 
          isSidebarVisible={isSidebarVisible}
          toggleSidebar={toggleSidebar}
        />
        <TopbarFiller style={topbarFillerAnimation}/>
      </TopbarWrapper>
    </header>
  );
};

export default Topbar;