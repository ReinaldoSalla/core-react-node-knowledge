import React, { FunctionComponent } from 'react';
import { Container, Text } from './ContentNull.styles';
import ContentNullProps from './ContentNull.types';
import ButtonLink from '../../shared/styles/ButtonLink.styles';

const ContentNull: FunctionComponent<ContentNullProps> = ({
  id
}): JSX.Element => (
  <Container>
    <Text>
      Could not find &ldquo;
      {id}
      &ldquo;
    </Text>
    <ButtonLink to='/'>Back to Home</ButtonLink>
  </Container>
);

export default ContentNull;