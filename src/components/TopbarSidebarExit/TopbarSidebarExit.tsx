import React, { FunctionComponent } from 'react';
import Exit from './TopbarSidebarExit.styles';

const TopbarSidebarExit = ({ 
  style, 
  toggleSidebar 
}): JSX.Element => (
  <Exit 
    style={style}
    onClick={toggleSidebar}
  >
    x
  </Exit>
);

export default TopbarSidebarExit;