import React, { FunctionComponent } from 'react';
import Exit from './SidebarExit';

interface SidebarExitProps {
  style: any;
  toggleSidebar: () => void;
}

// const SidebarExit: any = ({ 
//   style, 
//   toggleSidebar 
// }): JSX.Element => (
//   <Exit 
//     style={style}
//     onClick={toggleSidebar}
//   >
//     X
//   </Exit>
// );

const SidebarExit: any = ({ 
  style, 
  exitSymbol,
  toggleSidebar 
}) => (
  <Exit 
    style={style}
    onClick={toggleSidebar}
  >
    {exitSymbol}
  </Exit>
);

export default SidebarExit;