import React, { FunctionComponent } from 'react';
import {
  Wrapper,
  Title,
  Topics,
  Topic,
  Text
} from './TopbarSidebarTopics.styles';
import { uglify } from '../../utils/textManipulation';

const TopbarSidebarTopicss: FunctionComponent<any> = ({
  style,
  title,
  subcontents
}): JSX.Element => (
  <Wrapper style={style}>
    <Title>{title}</Title>
    <Topics>
      {subcontents.map((subcontent: any) => (
        <Topic key={subcontent}>
          <Text to={uglify(subcontent)}>{subcontent}</Text>
        </Topic>
      ))}
    </Topics>
  </Wrapper>
);

export default TopbarSidebarTopicss;