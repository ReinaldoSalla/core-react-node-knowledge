import React, { FunctionComponent } from 'react';
import { Container, Text, Button } from './ContentNull.styles';
import ContentNullProps from './ContentNull.types';

const ContentNull: FunctionComponent<ContentNullProps> = ({
  id
}): JSX.Element => (
  <Container>
    <Text>
      Could not find &ldquo;
      {id}
      &ldquo;
    </Text>
    <Button>Back to Home</Button>
  </Container>
);

export default ContentNull;