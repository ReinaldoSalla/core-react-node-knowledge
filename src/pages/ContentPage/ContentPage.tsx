import React from 'react';
import Content from '../../components/Content';

const ContentPage = ({ isSidebarVisible, closeSidebar }) => (
  <Content isSidebarVisible={isSidebarVisible} closeSidebar={closeSidebar} />
);

export default ContentPage;