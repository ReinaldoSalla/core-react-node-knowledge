import React, { FunctionComponent } from 'react';
import Exit from './SidebarExit.styles';

interface SidebarExitProps {
  style: any;
  toggleSidebar: () => void;
}

const SidebarExit = ({ 
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

export default SidebarExit;