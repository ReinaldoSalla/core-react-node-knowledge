import React, { FunctionComponent } from 'react';
import {
  Wrapper,
  IconWrapper,
  Icon,
  Title,
  DescriptionWrapper,
  Description,
  Check
} from './CategoriesBox.styles';

const CategoriesBox: FunctionComponent<any> = ({
  title,
  description,
  path,
  Svg
}): JSX.Element => (
  <Wrapper to={path}>
    <IconWrapper>
      <Icon as={Svg} />
    </IconWrapper>
    <Title>
      {title}
    </Title>
    <DescriptionWrapper>
      <Description>
        {description}
      </Description>
    </DescriptionWrapper>
    <Check>
      Check
      {' '}
      {title}
      {' '}
      →
    </Check>
  </Wrapper>
);

export default CategoriesBox;