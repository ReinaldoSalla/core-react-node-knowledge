import React from 'react';
import Content from '../../components/Content';

const ContentPage = ({ isSidebarVisible, topRef }) => (
  <Content isSidebarVisible={isSidebarVisible} topRef={topRef} />
);

export default Content;