const computeContentSidebarCircleCN = (flag) => (
  flag
    ? 'content_sidebar-circle transition_content_sidebar-circle'
    : 'content_sidebar-circle'
);

const computeContentSidebarTextCN = (flag) => (
  flag
    ? 'content_sidebar-text transition_content_sidebar-text'
    : 'content_sidebar-text'
);

export { computeContentSidebarCircleCN, computeContentSidebarTextCN };