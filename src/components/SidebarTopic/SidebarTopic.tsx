import React from 'react';
import {
  Wrapper,
  Title,
  Topic
} from './SidebarTopic.styles';

const SidebarItem = ({ style, title, contents }) => (
  <Wrapper style={style}>
    <Title>{title}</Title>
    {contents.map((content, index) => (
      <ul key={index}>
        <Topic>{content}</Topic>
      </ul>
    ))}
  </Wrapper>
);

export default SidebarItem;