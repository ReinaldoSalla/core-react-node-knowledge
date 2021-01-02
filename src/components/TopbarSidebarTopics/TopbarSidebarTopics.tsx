import React, { useContext, FunctionComponent } from 'react';
import {
  Wrapper,
  Title,
  Topics,
  Topic,
  Text
} from './TopbarSidebarTopics.styles';
import { normalToHifen } from '../../utils/textManipulation';
import { ModalsDispatch } from '../../shared/context/ModalsContext';

const TopbarSidebarTopicss: FunctionComponent<any> = ({
  style,
  title,
  subcontents
}): JSX.Element => {
  const dispatch = useContext(ModalsDispatch);

  return (
    <Wrapper style={style}>
      <Title>{title}</Title>
      <Topics>
        {subcontents.map((subcontent: any) => (
          <Topic key={subcontent}>
            <Text
              onClick={(): void => dispatch({ type: 'CLOSE_MODALS' })}
              to={normalToHifen(subcontent)}
            >
              {subcontent}
            </Text>
          </Topic>
        ))}
      </Topics>
    </Wrapper>
  );
};

export default TopbarSidebarTopicss;