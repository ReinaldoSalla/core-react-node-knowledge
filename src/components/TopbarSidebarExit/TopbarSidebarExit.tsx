import React, { FunctionComponent } from 'react';
import Exit from './TopbarSidebarExit.styles';

const TopbarSidebarExit: FunctionComponent<any> = ({
  style,
  toggleTopbarSidebar
}): JSX.Element => (
  <Exit
    style={style}
    onClick={toggleTopbarSidebar}
  >
    x
  </Exit>
);

export default TopbarSidebarExit;
