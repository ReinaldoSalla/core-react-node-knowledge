import React, { FunctionComponent } from 'react';
import {
  Wrapper,
  Title,
  Topics,
  Topic,
  Text,
} from './TopbarSidebarTopics.styles';

const TopbarSidebarTopicss: FunctionComponent<any> = ({
  style,
  title,
  subcontents,
}): JSX.Element => (
  <Wrapper style={style}>
    <Title>{title}</Title>
    <Topics>
      {subcontents.map((subcontent) => (
        <Topic key={subcontent}>
          <Text href='/#'>{subcontent}</Text>
        </Topic>
      ))}
    </Topics>
  </Wrapper>
);

export default TopbarSidebarTopicss;