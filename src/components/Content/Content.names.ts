const computeContentSidebarCircleCN = (currFlag, prevFlag=false) => (
  currFlag && !prevFlag
    ? 'content_sidebar-circle transition_content_sidebar-circle'
    : 'content_sidebar-circle'
);

const computeContentSidebarTextCN = (currFlag, prevFlag=false) => (
  currFlag && !prevFlag
    ? 'content_sidebar-text transition_content_sidebar-text'
    : 'content_sidebar-text'
);

export { computeContentSidebarCircleCN, computeContentSidebarTextCN };