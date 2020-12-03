import React from 'react';
import {
  Wrapper,
  Title,
  Topics,
  Topic,
  Text
} from './SidebarTopic.styles';

const SidebarTopics = ({ style, title, subcontents }) => (
  <Wrapper style={style}>
    <Title>{title}</Title>
    <Topics>
      {subcontents.map((subcontent, index) => (
        <Topic key={index}>
          <Text href='/#'>{subcontent}</Text>
        </Topic>
      ))}
    </Topics>
  </Wrapper>
);

export default SidebarTopics;